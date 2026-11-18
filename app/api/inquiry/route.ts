import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

type Inquiry = {
  firstName: string;
  lastName: string;
  email: string;
  organisation?: string;
  topic: string;
  message: string;
};

const HEADERS = [
  "Date",
  "First Name",
  "Last Name",
  "Email",
  "Organisation",
  "Topic",
  "Message",
];

export async function POST(request: NextRequest) {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const email = body.email?.trim();
  const organisation = body.organisation?.trim() ?? "";
  const topic = body.topic?.trim();
  const message = body.message?.trim();

  if (!firstName || !lastName || !email || !topic || !message) {
    return NextResponse.json(
      { error: "Please fill in every required field." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 },
    );
  }

  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.error("[inquiry] Google Sheets credentials are not configured");
    return NextResponse.json(
      { error: "The form is not connected yet. Please email us instead." },
      { status: 503 },
    );
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // write the header row once, on the first submission
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:G1",
    });
    if (!existing.data.values?.length) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1:G1",
        valueInputOption: "RAW",
        requestBody: { values: [HEADERS] },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            firstName,
            lastName,
            email,
            organisation,
            topic,
            message,
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiry] failed to record submission", error);
    return NextResponse.json(
      { error: "Something went wrong sending that. Please try again." },
      { status: 500 },
    );
  }
}

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

type Inquiry = {
  firstName: string;
  lastName: string;
  email: string;
  organisation?: string;
  topic: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  const to = process.env.INQUIRY_TO ?? site.email;
  const name = `${firstName} ${lastName}`;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error("[inquiry] no delivery method configured");
    return NextResponse.json(
      { error: "The form is not connected yet. Please email us instead." },
      { status: 503 },
    );
  }

  const lines = [
    ["Name", name],
    ["Email", email],
    ["Organisation", organisation || "—"],
    ["Topic", topic],
  ];

  try {
    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: { user, pass },
    });

    await transport.sendMail({
      from: `"${site.name} website" <${user}>`,
      to,
      // replying in the mail client answers the visitor directly
      replyTo: `"${name}" <${email}>`,
      subject: `Website inquiry — ${topic}`,
      text: [
        ...lines.map(([k, v]) => `${k}: ${v}`),
        "",
        message,
      ].join("\n"),
      html: `
        <table style="font-family:system-ui,sans-serif;font-size:15px;border-collapse:collapse">
          ${lines
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 16px 4px 0;color:#4b5b55">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <p style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.7;white-space:pre-wrap;margin-top:20px">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiry] failed to send", error);
    return NextResponse.json(
      { error: "Something went wrong sending that. Please try again." },
      { status: 500 },
    );
  }
}

# Michael Aladejana Ministries

Marketing site for Michael Aladejana Ministries — Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

## Run

```bash
npm install
npm run dev
```

## Structure

- `app/page.tsx` — the long-form home page: hero → 01 Discipleship → 02 Biblical Teaching → 03 Meet Michael → 04 The Gospel on the Road (Texas Tour) → 05 Books & Resources → 06 Pastoral Guidance & Coaching → Get in touch.
- `app/connect/page.tsx` — contact page; prefills the inquiry topic from `?topic=`.
- `app/privacy/page.tsx` — placeholder privacy notice (needs real copy before launch).
- `components/` — one file per section, plus `site-header`, `site-footer`, `ui.tsx` (Button / SectionLabel / Monogram / Arrow).
- `lib/site.ts` — all editable copy: nav, pillars, teachings, tour cities, coaching tracks, inquiry topics.

## Design tokens

Defined in `app/globals.css` under `@theme`:

| Token | Value | Use |
| --- | --- | --- |
| `forest-900` | `#123a33` | Hero, tour, footer |
| `cream-100` | `#f7f3ec` | Page background |
| `sage-100` | `#edf2ea` | Alternating sections |
| `rust-600` | `#a8552c` | Primary buttons, eyebrows |
| `peach-200` | `#f3dfcb` | Italic display accents on dark |

Fonts: Playfair Display (display) + Work Sans (body).

## Not wired yet

- The inquiry form composes a `mailto:` to `site.email` — swap in a real endpoint (Resend, Formspree, route handler) before launch.
- Featured video and teaching rows link to the YouTube channel; replace with real video IDs.
- Images are placeholders pulled from the `thecglobal` project.

## Inquiry form

`POST /api/inquiry` emails each submission to the ministry inbox
(`INQUIRY_TO`, defaulting to `site.email`). The visitor's address is set as
`Reply-To`, so replying in the mail client answers them directly.

Set these in `.env.local` locally and in the Vercel project settings:

| Variable | Notes |
| --- | --- |
| `SMTP_HOST` | e.g. `smtp-mail.outlook.com` |
| `SMTP_PORT` | `587` (STARTTLS) or `465` (TLS) |
| `SMTP_USER` | the mailbox that sends |
| `SMTP_PASS` | **app password**, not the account password |
| `INQUIRY_TO` | optional override for the recipient |

Outlook and Gmail both require an app password with 2FA enabled; a plain
account password will fail authentication. Until the variables are set the
endpoint answers 503 and the form tells the visitor to email instead.

Discipleship registration stays on Jotform; consultations book through cal.com.
Both links live in `lib/site.ts`.

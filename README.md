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

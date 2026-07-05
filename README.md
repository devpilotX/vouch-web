# Vouch marketing site

This is the landing page for Vouch, the app that lets your family confirm a call is
really them before anyone believes a word. It exists to do one job first: find out
if people actually want this. Emails in, ads out, real conversations with families.

This is step 1 of the plan. We do not build the app until this page proves people care.

## What's in here

- A single, fast landing page built with Next.js (App Router) and TypeScript
- An email waitlist that saves signups to Resend
- Privacy-friendly analytics through Plausible (only loads if you set a domain)
- No cookie banners, no tracking junk, nothing heavy

## Running it locally

You need Node 18 or newer.

```bash
npm install
cp .env.example .env.local   # fill in keys when you have them
npm run dev
```

Then open http://localhost:3000.

The waitlist form works even without Resend keys. In that case it just logs the
email to the console so you can build without a live account.

## Handy commands

| Command             | What it does                      |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the dev server              |
| `npm run build`     | Production build                  |
| `npm run start`     | Serve the production build        |
| `npm run lint`      | Lint with the Next.js rules       |
| `npm run typecheck` | Type-check without emitting files |

## Environment variables

See `.env.example`. Short version:

- `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` turn on real waitlist storage.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` turns on analytics.

All three are optional in development.

## Project layout

```
app/
  layout.tsx          root layout, metadata, analytics
  page.tsx            the landing page, section by section
  globals.css         all styles and design tokens
  api/waitlist/       the POST endpoint that takes an email
components/           one file per section, plus the shared form and logo
lib/waitlist.ts       the bit that talks to Resend
.github/workflows/    CI that lints, type-checks and builds on every push
```

## Deploying

Built to drop straight onto Vercel. Point it at this repo, add the environment
variables, and it ships. Any Node host that runs `npm run build` then `npm run start`
works too.

## Roadmap

This repo is only the marketing site. The backend, the mobile app, and everything
else live in their own repos and only get built once this page proves demand.

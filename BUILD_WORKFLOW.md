# Toni's Taco build workflow

Aaron authorized Vercel hosting for this client on 2026-10-08. This overrides the older Netlify migration policy for Toni's Taco only.

- Source: `madscientist-apps/microsites`, branch `tonis-taco`.
- Host: existing Vercel project `microsites-sites` in `madscientist-apps`.
- Deploy this client as a protected branch preview. Never replace umbrella main or another client.
- Preserve Vercel automatic deployment gates. Batch and validate changes before explicitly deploying the completed Git commit.
- Build: `npm ci` then `npm run build`; static export goes to `out/`.
- Update the Mad App Lists card, routing record, and history after meaningful work.
- Retain the original private ChatGPT Sites version as a historical copy; GitHub does not sync to it.

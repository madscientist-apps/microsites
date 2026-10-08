# Microsites showcase workflow

Aaron authorized a public, client-shareable Microsites dashboard and Vercel previews on 2026-10-08. This overrides older Netlify migration requirements for this project.

- Umbrella `main` contains the six-site showcase, deployed to production on the existing `microsites-sites` Vercel project.
- Client websites remain on their own branches; never merge them into umbrella main.
- The showcase lists verified stable Vercel branch aliases. Keep technical branches out of the client-facing dashboard.
- Public access is intentional so clients can open both the dashboard and site previews without signing in. Do not add private data to this project.
- Preserve Git deployment gates. Batch, validate, then explicitly deploy the completed commit. Per-deployment framework settings differ: the dashboard is static HTML; client sites may use Next.js.
- Keep this dashboard independent of Mad Apps. This is the link Aaron sends to clients.

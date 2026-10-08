# Toni's Taco

Client source branch: `tonis-taco` in `madscientist-apps/microsites`.

Migrated from ChatGPT Sites project `appgprj_6a80bf654df081919efcdbebb17fe8c1`, source commit `107a368fc66527e911fc7cdf75a2d6c1783ccb93`, on October 8, 2026.

## Development

Run `npm ci`, then `npm run dev`. `npm run build` exports the site to `out/` for static hosting. The original design, content, and seven WebP images are retained. No database, authentication, or server endpoints are used by the homepage; unused Sites/Cloudflare scaffolding is omitted. Existing dependency versions and lockfile are retained for reproducibility.

## Hosting

Aaron authorized deployment on the existing `microsites-sites` Vercel project on October 8, 2026. Use the dedicated `tonis-taco` branch and its protected Vercel preview. Preserve automatic deployment gates and never overwrite the umbrella or another client.

The previous owner-private Sites version remains at https://tonis-taco.goodlion.chatgpt.site. GitHub changes do not sync back to it. Future work branches start from `tonis-taco`.

Validation: Next.js production static export and TypeScript passed; rendered page content, image references, and exact original-image parity checked.

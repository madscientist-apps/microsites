# Build and preview workflow

Aaron-approved policy, 2026-09-23. This file supersedes older deployment instructions only; retain all product, data, testing, and security rules.

Mad App Lists is the routing source of truth: https://github.com/madscientist-apps/madapplist/blob/main/hosting-registry.json and docs/BUILD_WORKFLOWS.md. Read the current project record before edits. GitHub owns code. A policy is not proof a host is configured.

## Netlify preview-first

- Work on a persistent task branch such as work/<task>. Keep main for reviewed releases. Do not merge unfinished work to main at the end of a session.
- No matching Netlify site was found in the audit. Set up and verify a Netlify preview before the next hosted work round.
- Use a pull request Deploy Preview targeting main, or a configured branch deploy. Reuse the task branch/PR across review rounds and return the actual successful preview URL after each completed build.
- Configure Git linking, production branch main, and Deploy Previews in Netlify before relying on automatic builds. A repository file alone does not establish this connection.
- Only merge to main and publish production when Aaron explicitly says it is ready to go live. A request to preview, save progress, or ordinary close-out is not a production release. This supersedes older #ship instructions that merge work before review.
- Keep existing Vercel gates and deployments intact during migration. Do not use preview-ready-* branches, since those can trigger legacy Vercel builds. Do not change DNS until the replacement passes functional checks.

## Every work round

Inspect the current branch, uncommitted work, hosting configuration and existing changes first. Preserve unrelated work and deployment gates. Batch related edits and run relevant checks before one final push. Do not force-push. Never use Lovable's coding agent without explicit permission. Return the verified preview URL, branch and commit, and distinguish saved code, preview, and production. Never invent a preview URL or claim a live page contains unpublished changes.

After meaningful work, update the Mad App Lists card and conversational history in the same round. Keep wins/problems clear and emoji-tagged. If preview setup or publication is blocked, record that explicitly.

Preview hosting does not isolate databases, auth callbacks, storage, payments, or email. Check those before testing writes. Preserve access controls and use test resources where needed. Retain existing Sites, GitHub Pages, local tools, and archives unless Aaron asks to migrate them. Vercel is legacy; do not create new Vercel previews by default.

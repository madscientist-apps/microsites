## Current build routing (2026-09-23)

Read [BUILD_WORKFLOW.md](BUILD_WORKFLOW.md) before editing or deploying. It supersedes older hosting, branch, preview and #ship deployment instructions below. Mad App Lists remains the central routing source. Existing product and security instructions still apply.

# Agent instructions

## Vercel deployment policy (Aaron-approved, 2026-09-22)

Read DEPLOYMENT.md before changing or deploying this project. It is the current deployment policy and supersedes older instructions that equate a push to main with publishing.

- Use GitHub for all code and assets. Batch related file edits into one commit where practical; never deploy each file separately.
- Ordinary branches, including main, must not trigger Vercel builds. Preserve the git.deploymentEnabled allowlist in vercel.json.
- Finish the whole requested task and run relevant local checks before requesting a hosted preview. Do not deploy for progress updates, intermediate fixes, or each image upload.
- At the ready-to-review milestone, publish the finished commit once to a NEW preview-ready-<unique-task-id> branch. Never work incrementally on that branch. See DEPLOYMENT.md for the GitHub connector and shell procedures.
- Reuse an existing preview for the same finished commit; check for it before triggering another. Check deployment status and return the real preview URL. Report errors honestly; do not loop redeployments.
- A preview is not a production release. Production publishing requires Aaron's release instruction and an authenticated Vercel deployment/promotion path; do not temporarily re-enable automatic builds on main.
- Before resuming an old branch, copy this policy and the deployment gate into THAT branch, preserving its app configuration. Old branches do not inherit main's files. Never merge unrelated app changes just to install the gate.
- Never force-push or rewrite published history. Never use Lovable's coding agent unless Aaron explicitly asks.

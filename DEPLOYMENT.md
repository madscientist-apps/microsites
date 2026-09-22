# Controlled Vercel previews

Installed 2026-09-22 with Aaron's approval to stop intermediate GitHub writes from causing repeated builds.

## Behavior

vercel.json blocks automatic Git deployments on every ordinary branch. Only branches named preview-ready-* are allowed to trigger a build. This uses Vercel's documented branch matching (a matching true rule overrides the catch-all false rule): https://vercel.com/docs/project-configuration/git-configuration

This policy applies to branches containing this configuration, not old branches automatically. It does not block explicit CLI/API deployments or deploy hooks. Do not add a second automatic deployment pipeline.

## Agent workflow

1. Work on main or an ordinary task branch. Preserve existing app-specific validation, data and release-note requirements.
2. Complete the requested task, validate it locally, and commit/push the finished state to GitHub. Batch file uploads and edits.
3. Check whether the same completed source SHA already has a ready preview. Reuse it if so.
4. Choose a new branch name such as preview-ready-20260922-taskname-<short-source-sha>. It must not be the project's production branch. Never push intermediate edits to this branch.
5. With an authenticated local Git checkout, run: git push origin HEAD:refs/heads/<new-preview-ready-name>
6. With only the GitHub connector, create_branch with repository_full_name, branch_name and sha set to the finished commit. Check Vercel for that exact branch/SHA. If branch creation does not trigger Vercel, do not repeatedly create branches; report the limitation and use an authenticated Git push or Vercel CLI/API when available.
7. Wait for the deployment outcome and return its actual URL. Check failures before retrying; retries are for a diagnosed fix, never polling by redeployment.

Creating a preview-ready branch is the explicit ready signal. Chat sessions do not emit an automatic end event. If the requested work is unfinished or the session is interrupted, leave saved work without deploying it.

## Production

Ordinary pushes to main no longer publish to the live site. Existing live deployments remain in place. When Aaron requests a production release, use an authenticated Vercel CLI/API deployment or an appropriate Vercel promotion after verifying environment compatibility. Do not change deploymentEnabled back to true as a shortcut. Never promote an unrelated branch or combine separate experiments.

The connector available during rollout could inspect Vercel but its deploy_to_vercel tool returned unavailable; no Vercel token was installed. Git-based previews are designed to avoid requiring a new credential. Production automation needs an available authenticated Vercel write path.

## Older branches and new projects

Before changing an older branch, bring over AGENTS.md/CLAUDE.md deployment guidance, this file, and the git.deploymentEnabled rule, while preserving its existing configuration and instructions. Do not transplant application files from another branch.

For a new Vercel project, merge this into its configuration before connecting Git:

```json
{ "git": { "deploymentEnabled": { "**": false, "preview-ready-*": true } } }
```

Copy the deployment guidance into AGENTS.md and CLAUDE.md. This repository policy is not an account-wide setting and new repositories do not inherit it automatically.

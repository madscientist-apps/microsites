# Controlled Vercel previews

Installed 2026-09-22 with Aaron's approval to stop intermediate GitHub writes from causing repeated builds.

## Behavior

vercel.json blocks automatic Git deployments on every ordinary branch. Only branches named preview-ready-* are allowed to trigger a build. This uses Vercel's documented branch matching (a matching true rule overrides the catch-all false rule): https://vercel.com/docs/project-configuration/git-configuration

This policy applies to branches containing this configuration, not old branches automatically. It does not block explicit CLI/API deployments or deploy hooks. Do not add a second automatic deployment pipeline.

## Agent workflow

1. Work on main or an ordinary task branch. Preserve existing app-specific validation, data and release-note requirements.
2. Complete the requested task, validate it locally, and commit/push the finished state to GitHub. Batch file uploads and edits.
3. Check whether the same completed source SHA already has a ready preview (branch-name SHA suffix or `.deployment-ready.json` sourceSha). Reuse it if so.
4. Choose a new branch name such as preview-ready-20260922-taskname-<short-source-sha>. It must not be the project's production branch. Never push intermediate edits to this branch.
5. With an authenticated local Git checkout, run: git push origin HEAD:refs/heads/<new-preview-ready-name>
6. With only the GitHub connector, create_branch at the finished source SHA. Branch creation alone did not trigger Vercel in the rollout test. Read the finished commit's tree, create_tree using that base tree and one metadata file `.deployment-ready.json` containing the source SHA and task name, then create_commit with the finished SHA as parent and update_ref on the NEW preview-ready branch with force=false. This final ref update is the ready signal. Do not add application edits to the preview branch. Check whether branch creation has already triggered a build before the metadata update, and reuse that build if present. Check for an existing preview-ready branch carrying the same source SHA before starting this sequence.
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

## Verified rollout

On 2026-09-22, the Helmsman ordinary main commit was saved without a new production deployment. Creating the preview branch alone produced no observed build. A single final commit/ref update on preview-ready-deployment-policy-9d28b912 produced READY deployment dpl_8HwT93BBWN6AeQp4SoYdbovdPrBV. The production deployment remained unchanged. This validates the connector's final-ref-update path, not an automatic chat-end event.

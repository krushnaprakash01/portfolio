# Push Projects to GitHub

## Goal
Create three GitHub repositories under user **krushnaprakash01** and push the local projects:
- `portfolio`
- `chat-app`
- `expense-tracker`

Update the `github` URLs in `src/data/projects.ts` to point to the newly created repos.

## User Review Required
> [!IMPORTANT]
> You must provide a **GitHub Personal Access Token (PAT)** with `repo` scope (full control of private/public repos). The token will be used by the `gh` CLI to authenticate and create the repos.
>
> If you prefer the device flow, we can retry the `gh auth login --web` method, but it requires you to open a URL in a browser and enter a code. This often fails in headless environments.

## Open Questions
- Do you want the repositories to be **public** or **private**?
- Would you like to use the **device flow** (no token) or provide a **PAT**?
- Confirm that the username `krushnaprakash01` is correct.

## Proposed Changes
### 1. Create `.gitignore` files (if missing)
- Add standard ignores for Vite/React projects.

### 2. Initialize Git repos locally
- `git init` in each project folder.
- `git add .` and `git commit -m "Initial commit"`.

### 3. Authenticate GitHub CLI
- Use provided PAT: `gh auth login --with-token < token.txt`.
- Or retry device flow (`gh auth login --web`).

### 4. Create remote repos via `gh repo create`
```bash
gh repo create krushnaprakash01/portfolio --public --source . --remote=origin --push
gh repo create krushnaprakash01/chat-app --public --source . --remote=origin --push
gh repo create krushnaprakash01/expense-tracker --public --source . --remote=origin --push
```
(Will be run inside each project directory.)

### 5. Update `projects.ts`
- Replace placeholder `github` URLs with the real repo URLs.

### 6. Push changes to GitHub
- `git push -u origin main` for each repo (already done by `gh repo create` if `--push` used).

## Verification Plan
- After each push, run `gh repo view <repo> --web` to ensure the repo exists.
- Verify that the `github` fields in `projects.ts` resolve to the correct URLs.
- Run `git remote -v` in each folder to confirm remote.

**Next steps:** Provide a PAT (or confirm you want to use device flow) and confirm repo visibility preference.


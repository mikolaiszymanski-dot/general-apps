# Git Workflow

Adapted from ECC `rules/common/git-workflow.md` (affaan-m/ECC v2.2.1).

## Commit Messages

```
<type>: <description>

<optional body: what and why, not how>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

## Pull Requests

1. Review the full branch, not just the latest commit: `git diff <base>...HEAD`
2. Summarize what changed and why
3. Include a test plan (what was run, what remains)
4. Push new branches with `git push -u origin <branch>`

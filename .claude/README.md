# Claude Code configuration

Curated subset of [ECC](https://github.com/affaan-m/ECC) (tag `v2.2.1`, 2026-09-07), copied into the repo instead of installing the full plugin. Reason: the full plugin adds roughly 40k tokens to every session and runs hooks on every tool call; this subset costs a few thousand tokens and runs nothing automatically.

## What is here

| Path | Loaded | Source in ECC | Changes |
|---|---|---|---|
| `rules/*.md` | every session | `rules/common/` | rewritten: softer immutability, language-neutral naming, no mandatory 80% coverage, ECC agent references replaced with native `/security-review` |
| `rules/typescript/`, `rules/python/` | only when editing matching files (`paths:` frontmatter) | `rules/typescript/`, `rules/python/` | links fixed, hook/skill references removed |
| `skills/*` | description always, body on invoke | `skills/`, `commands/` | see below |
| `agents/*` | description always, prompt on delegation | `agents/` | ECC "Prompt Defense Baseline" boilerplate removed |

Skills: `build-fix`, `refactor-clean`, `test-coverage` (were ECC commands), `verification-loop` (tail about `/verify` and hooks dropped), `error-handling`, `api-design`, `database-migrations`, `postgres-patterns` (Related block dropped), `e2e-testing` (Web3/trading examples dropped), `python-patterns`, `fastapi-patterns`, `react-patterns` (links to unshipped ECC files dropped).

Agents: `silent-failure-hunter`, `pr-test-analyzer`.

## Deliberately not included

- Hooks (24 of them: GateGuard, config protection, observation logging, format-on-stop, ...) - friction without a clear win for this repo.
- `.mcp.json` (`npx -y chrome-devtools-mcp@latest`) - an unpinned npm package started in every session.
- Skills and agents that duplicate native Claude Code features: `/code-review`, `/simplify`, `/security-review`, plan mode, the Explore agent.
- Language packs for stacks not in use yet (Go, Rust, Kotlin, Swift, Django, Spring, ...).

## Adding more

```bash
git clone --branch v2.2.1 --depth 1 https://github.com/affaan-m/ECC.git /tmp/ecc
ls /tmp/ecc/skills /tmp/ecc/rules /tmp/ecc/agents
```

Copy a `skills/<name>/SKILL.md`, an `agents/<name>.md` or a `rules/<lang>/` directory here, then strip references to ECC scripts, hooks, Exa/Context7, and to agents or skills that are not in this repo. Read the file before copying it.

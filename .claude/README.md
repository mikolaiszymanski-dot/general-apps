# Claude Code configuration

Curated subset of [ECC](https://github.com/affaan-m/ECC) (tag `v2.2.1`, 2026-09-07), copied into the repo instead of installing the full plugin. Reason: the full plugin adds roughly 40k tokens to every session and runs hooks on every tool call; this subset costs a few thousand tokens and runs nothing automatically.

## What is here

| Path | Loaded | Source in ECC | Changes |
|---|---|---|---|
| `rules/*.md` | every session | `rules/common/` | rewritten: softer immutability, language-neutral naming, no mandatory 80% coverage, ECC agent references replaced with native `/security-review` |
| `rules/<lang>/` (20 packs) | only when working with matching files (`paths:` frontmatter) | `rules/<lang>/` | see "Language packs" below |
| `skills/*` | description always, body on invoke | `skills/`, `commands/` | see below |
| `agents/*` | description always, prompt on delegation | `agents/` | ECC "Prompt Defense Baseline" boilerplate removed |

Skills: `build-fix`, `refactor-clean`, `test-coverage` (were ECC commands), `verification-loop` (tail about `/verify` and hooks dropped), `error-handling`, `api-design`, `database-migrations`, `postgres-patterns` (Related block dropped), `e2e-testing` (Web3/trading examples dropped), `python-patterns`, `fastapi-patterns`, `react-patterns` (links to unshipped ECC files dropped).

Agents: `silent-failure-hunter`, `pr-test-analyzer`.

## Language packs

All 20 ECC rule packs are in: `angular`, `arkts` (HarmonyOS), `cpp`, `csharp`, `dart` (Flutter), `fsharp`, `golang`, `java`, `kotlin`, `nuxt`, `perl`, `php`, `python` (incl. FastAPI), `react`, `react-native`, `ruby` (Rails), `rust`, `swift`, `typescript`, `vue`, `web`. Every file carries `paths:` globs, so a pack costs nothing until a matching file is in play. Ported by `port_rules.py` logic: `../common/*` links point at the rules here, `See skill:` lines survive only for skills that exist in this repo, "Agent Support" sections and references to ECC hooks, agents and scripts are removed.

Scopes narrowed relative to ECC, because the originals would have fired on unrelated code:

| Pack | ECC scope | Scope here |
|---|---|---|
| `arkts/*` | every `*.ts` | `*.ets` and HarmonyOS json5 files only |
| `react-native/*` | every `*.ts`/`*.tsx` | `**/mobile/**`, `*.native.ts(x)`, `metro.config.js`, `react-native.config.js`, `eas.json` - put RN code under `mobile/` or rename the globs |
| `nuxt/*` | `pages/**`, `middleware/**`, `server/**/*.ts` (also Next.js/Express layouts) | `nuxt.config.*`, `app.vue`, `*.vue` under `pages/`/`layouts/`, `server/api|routes|middleware|utils/**`, `composables/**` |
| `angular/testing.md` | every `*.spec.ts` | `*.component|service|pipe|directive|guard|resolver.spec.ts` |
| `react/security.md` | also `app/**/*.ts`, `pages/**/*.ts` | `*.tsx`, `*.jsx`, `components/**/*.ts` |

Known overlap: `web/*` matches `*.tsx`, so in a React Native project its DOM-oriented rules would load too; delete `rules/web/` there. `react/hooks.md` is about React hooks, not Claude Code hooks (ECC's naming).

Left out: every other `<lang>/hooks.md` (ECC harness hook recipes) and `web/design-quality.md` (a visual-taste manifesto that would push simple internal tools toward editorial layouts).

## Deliberately not included

- Hooks (24 of them: GateGuard, config protection, observation logging, format-on-stop, ...) - friction without a clear win for this repo.
- `.mcp.json` (`npx -y chrome-devtools-mcp@latest`) - an unpinned npm package started in every session.
- Skills and agents that duplicate native Claude Code features: `/code-review`, `/simplify`, `/security-review`, plan mode, the Explore agent.
- Language-specific skills beyond Python/FastAPI/React (Go, Rust, Kotlin, Java, Swift, Dart, Vue, Laravel, Django, ...) - each skill description is loaded in every session, so they are added per stack on request.

## Adding more

```bash
git clone --branch v2.2.1 --depth 1 https://github.com/affaan-m/ECC.git /tmp/ecc
ls /tmp/ecc/skills /tmp/ecc/rules /tmp/ecc/agents
```

Copy a `skills/<name>/SKILL.md`, an `agents/<name>.md` or a `rules/<lang>/` directory here, then strip references to ECC scripts, hooks, Exa/Context7, and to agents or skills that are not in this repo. Read the file before copying it.

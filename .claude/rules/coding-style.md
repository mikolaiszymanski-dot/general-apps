# Coding Style

Adapted from ECC `rules/common/coding-style.md` (affaan-m/ECC v2.2.1). Language-specific additions live in `typescript/` and `python/`.

## Core Principles

- **KISS** - prefer the simplest solution that actually works; optimize for clarity over cleverness; no premature optimization.
- **DRY** - extract repeated logic into shared functions when the repetition is real, not speculative.
- **YAGNI** - do not build features or abstractions before they are needed.

## Immutability

Prefer immutable updates for shared or long-lived state: return a new object instead of mutating the argument. Local mutation inside a function is fine when it stays local and keeps the code clearer.

## File Organization

- Many small files beat few large ones: 200-400 lines typical, 800 lines as a soft ceiling for source files (tests, generated and vendored files may exceed it).
- Organize by feature/domain, not by type.
- Extract utilities from large modules.

## Error Handling

- Handle errors explicitly at every level; never silently swallow them.
- User-friendly messages in UI-facing code, detailed context in server-side logs.

## Input Validation

- Validate at system boundaries: user input, API responses, file content.
- Use schema-based validation where available (Zod, Pydantic); fail fast with clear messages.

## Naming

- Follow the language's convention (camelCase in TS/JS, snake_case in Python); `PascalCase` for types, classes and components; `UPPER_SNAKE_CASE` for constants.
- Booleans read as questions: `is`, `has`, `should`, `can`.
- Descriptive names over short ones.

## Code Smells to Avoid

- Deep nesting (>4 levels) - prefer early returns.
- Magic numbers - use named constants for thresholds, delays, limits.
- Long functions (>50 lines) - split into focused pieces.

## Before Marking Work Complete

- [ ] Readable, well-named code
- [ ] Functions small, files focused
- [ ] Errors handled explicitly
- [ ] No hardcoded values that belong in config

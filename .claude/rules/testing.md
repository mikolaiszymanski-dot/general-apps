# Testing

Adapted from ECC `rules/common/testing.md` (affaan-m/ECC v2.2.1), with the mandatory-coverage rules relaxed.

## What Gets Tested

- New logic gets unit tests; API endpoints and database code get integration tests.
- E2E tests (Playwright) only for critical user flows.
- For bug fixes, write the failing test first, then fix - it proves the bug and guards against regression.
- Fix the implementation, not the test, unless the test itself is wrong.

## Structure

Arrange-Act-Assert, one behavior per test:

```typescript
test('returns empty array when no items match query', () => {
  // Arrange
  const items = [{ name: 'a' }]

  // Act
  const result = search(items, 'zzz')

  // Assert
  expect(result).toEqual([])
})
```

## Naming

Describe the behavior under test, not the function name:

- `returns empty array when no items match query`
- `throws when API key is missing`
- `falls back to substring search when cache is unavailable`

## Rules

- Tests are independent: no shared mutable state, no order dependence.
- Mock external services (network, database, file system) in unit tests.
- Coverage is a signal, not a target: cover the paths that matter (branches, error handling) rather than chasing a percentage. When asked to raise coverage, use the `test-coverage` skill.
- Language packs under `rules/<lang>/` quote 80% coverage targets; treat those as guidelines from the source material, not gates.

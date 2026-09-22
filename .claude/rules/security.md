# Security Guidelines

Adapted from ECC `rules/common/security.md` (affaan-m/ECC v2.2.1).

## Checks Before Committing

- [ ] No hardcoded secrets (API keys, passwords, tokens) - use environment variables or a secret manager, and validate required secrets at startup
- [ ] All external input validated (user input, request bodies, file content, API responses)
- [ ] SQL via parameterized queries or an ORM, never string concatenation
- [ ] HTML output escaped or sanitized (XSS)
- [ ] Error messages do not leak internals (stack traces, SQL, file paths)

For anything exposed to the internet, additionally:

- [ ] Authentication and authorization verified on every protected route
- [ ] CSRF protection for cookie-based sessions
- [ ] Rate limiting on auth and write-heavy endpoints

## If a Security Issue Is Found

1. Stop and fix CRITICAL issues before continuing other work
2. Run `/security-review` on the affected area
3. Rotate any secret that may have been exposed
4. Search the codebase for the same pattern elsewhere

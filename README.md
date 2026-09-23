# general-apps

## Design system (`design-system/`)

The i2c design system (brand book, tokens, components, logos, favicons, OG images), delivered from the design-system artifact in Claude. Every UI in this repo follows it; `CLAUDE.md` loads its rules into every Claude Code session. Changes made in the artifact have to be copied here by hand - the two copies do not sync.

- Deviation from the delivered package: `examples/BrandHero.html` has no phone number (the site shows only the e-mail, and this repo is public).
- Skill for other chats: `scripts/package-design-system-skill.sh` builds `dist/i2c-design-system.zip` (the design system plus `skills/i2c-design-system/SKILL.md`). Upload it in Claude under Customize > Skills to make the design system available in every chat.

## i2c.pl (`docs/`)

Landing page for https://i2c.pl, built on the design system: contact and invoice details (dane do faktury), meant to be shown on a phone, e.g. at a petrol station till. It will later grow into a personal knowledge base.

- `docs/index.html` is the whole page: HTML and CSS, no JavaScript. The details appear in `<main>` and in the `description` / `og:*` meta tags.
- `docs/ds/` holds the design-system files the page uses, copied by `scripts/sync-design-system.sh`, because GitHub Pages publishes only `docs/`. Do not edit it; after any change in `design-system/`, run the script and commit.
- Mulish is self-hosted in `docs/fonts/` (SIL OFL 1.1, `docs/fonts/OFL.txt`); the synced `i2c.css` drops the Google Fonts import, so the page makes no third-party requests.
- Additions the design system does not define yet: the stacked contact layout with a larger NIP below 1600px, the motif layout for narrow screens, and the fly-in/float animation (off with `prefers-reduced-motion`).
- `docs/CNAME` holds the custom domain for GitHub Pages.
- The page is `noindex`, so search engines do not list the name and address. Remove that meta tag if the page should be searchable.

Local preview: `python3 -m http.server --directory docs 8000`, then open http://localhost:8000.

### Deployment

GitHub Pages: Settings → Pages → Source "Deploy from a branch", folder `/docs`, custom domain `i2c.pl`, then "Enforce HTTPS".

DNS for `i2c.pl` (registrar: Aftermarket.pl), per [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site):

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `CNAME` | `www` | `mikolaiszymanski-dot.github.io` |

On the GitHub Free plan, Pages works only for public repositories, so keep private notes out of this repo.

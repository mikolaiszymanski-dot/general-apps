# general-apps

## i2c.pl (`docs/`)

Landing page for https://i2c.pl: contact and invoice details (dane do faktury), modelled on the previous i2c.pl design - white page, the i2c logo, and the logo's letters (dot, bar, "2", dot, "c") as large animated black shapes. It has to work when shown on a phone at a till, so on narrow screens the details stack and the NIP is larger. It will later grow into a personal knowledge base.

- `docs/index.html` is the whole page: HTML and CSS, no JavaScript. The details appear in `<main>` and in the `description` / `og:*` meta tags.
- The logo and shapes are inline SVG, rebuilt from a screenshot of the old site (stroke 10 units, rings of radius 20/10, dots of radius 6.25). `docs/favicon.svg` uses the same mark.
- Font: Mulish, self-hosted in `docs/fonts/` (SIL OFL 1.1, `docs/fonts/OFL.txt`), so the page makes no third-party requests.
- Animations respect `prefers-reduced-motion`.
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

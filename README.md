# general-apps

## i2c.pl (`docs/`)

Landing page for https://i2c.pl: invoice details (dane do faktury), meant to be shown on a phone, e.g. at a petrol station till. It will later grow into a personal knowledge base.

- `docs/index.html` is the whole page: plain HTML and CSS, no JavaScript, no external requests. The data appears in `<main>` and in the `description` / `og:description` meta tags.
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

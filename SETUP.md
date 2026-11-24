# Publishing this portfolio

The repository includes a dependency-free static site. It can be previewed locally without installing packages:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> to view the portfolio.

## GitHub Pages

The live site is <https://blpatnaik31.github.io/tpm/>, served from the `blpatnaik31/blpatnaik31.github.io` repository. Its sync workflow copies `index.html`, `app.js`, and `styles.css` from this repo's `main` branch into `/tpm/`. Merge to `main` here and the change is published on the next sync (hourly, or immediately when `PAGES_SYNC_TOKEN` is configured).

Because the site uses hash-based routes, it works on GitHub Pages without a rewrite configuration. Links to the FDE portfolio use absolute URLs, so they work both locally and on the live site.

## Before publishing

- Review [`PLACEHOLDERS.md`](PLACEHOLDERS.md), especially the Alcon case-study notes.
- Confirm that company names, engagement details, and metrics are cleared for public use.
- Remove or generalize any content that could identify confidential systems, people, or data.
- Test the published URL on mobile and desktop.

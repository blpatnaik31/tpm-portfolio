# Publishing this portfolio

The repository includes a dependency-free static site. It can be previewed locally without installing packages:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> to view the portfolio.

## GitHub Pages

1. Push the repository to `blpatnaik31/tpm-portfolio`.
2. Open **Settings → Pages** on GitHub.
3. Choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
4. Share the generated Pages URL or configure a custom domain.

Because the site is served from the repository root and uses hash-based routes, it works on GitHub Pages without a rewrite configuration.

## Before publishing

- Review [`PLACEHOLDERS.md`](PLACEHOLDERS.md), especially the Alcon case-study notes.
- Confirm that company names, engagement details, and metrics are cleared for public use.
- Remove or generalize any content that could identify confidential systems, people, or data.
- Test the published URL on mobile and desktop.

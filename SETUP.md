# Pushing this repo to GitHub

The `blpatnaik31/tpm-portfolio` repo already exists on GitHub (created, empty) — but this folder itself is **not yet a git repo**: the content was copied here from the cloud build without its git history (the file-transfer tool won't write into a `.git` folder). You need to initialize git fresh here before pushing. From inside this folder, run:

```bash
git init
git add .
git commit -m "Initial TPM portfolio: case studies, artifacts, skills matrix"
git branch -M main
git remote add origin https://github.com/blpatnaik31/tpm-portfolio.git
git push -u origin main
```

Then pin the repo from your GitHub profile (Customize your pins → select it).

Delete this file once you've pushed, or keep it — it's harmless either way.

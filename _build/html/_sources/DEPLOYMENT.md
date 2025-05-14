# Deploying Your Jupyter Book Website

This guide provides instructions for deploying your Jupyter Book website to GitHub Pages.

## Setup

1. Create a new `main` branch from your current `src` branch:

```bash
# Make sure you're on the src branch
git checkout src

# Create and checkout a new main branch
git checkout -b main

# Copy the Jupyter Book content to the root of the repository
cp -r jupyter-book/* .
cp -r jupyter-book/.github .
```

2. Add and commit the changes:

```bash
git add .
git commit -m "Migrate to Jupyter Book from Nikola"
```

3. Push the new branch to GitHub:

```bash
git push -u origin main
```

4. In your GitHub repository settings:
   - Go to Settings > General > Default branch
   - Change the default branch from `src` to `main`
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"

## Build Process

The website will be automatically built and deployed using GitHub Actions when you push changes to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

## Local Development

To build and preview the site locally:

```bash
# Create and activate a virtual environment (if not already done)
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
uv pip install -e .

# Build the book
jupyter-book build .

# Preview the site
open _build/html/index.html  # On Windows: start _build/html/index.html
```

## Verifying Deployment

1. After pushing to `main`, check the Actions tab in your GitHub repository to monitor the build progress
2. Once the action completes successfully, visit your site at `https://samuelstanton.github.io/`
3. Verify that all pages load properly, including:
   - Home page
   - Bio page with CV link
   - Publications page with PDF links
   - Blog posts

## Updating the Website

1. Make changes to the content files (Markdown files, notebooks, etc.)
2. Build and test locally
3. Commit and push to the `main` branch
4. GitHub Actions will automatically build and deploy the site

## Troubleshooting

If your deployment encounters issues:

1. Check the GitHub Actions logs for specific error messages
2. Ensure all paths in your markdown files are correct (relative vs. absolute)
3. Verify that all required files are present in the repository
4. For PDF links, ensure the files exist in the `files/` directory

Remember that the built website will be deployed to the `gh-pages` branch and served at `https://samuelstanton.github.io/`.
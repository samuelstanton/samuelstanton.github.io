# Samuel Stanton's Personal Website

This repository contains the source code for my personal website, built with [Jupyter Book](https://jupyterbook.org/).

## Development

### Setup

This project uses [uv](https://github.com/astral-sh/uv) for dependency management.

```bash
# Install uv if not already installed
pip install uv

# Create a virtual environment and install dependencies
uv venv
uv pip install -e .
```

### Building the website

```bash
# Build the book
jupyter-book build .

# View the book locally
open _build/html/index.html
```

### Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.

## License

Content is copyright © Samuel Stanton
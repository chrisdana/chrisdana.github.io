# Chris Dana GitHub Page

This repository contains a Jekyll-based static site that is published via GitHub Pages.

## First-Time Local Setup

These steps were validated locally on macOS.

1. Install Ruby 3.3 with Homebrew.
   ```bash
   brew install ruby@3.3
   ```

2. Make sure the Homebrew Ruby is first in your `PATH`.
   ```bash
   echo 'export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. Install the Bundler version pinned by this repo.
   ```bash
   gem install bundler:2.3.26
   ```

4. Install the site dependencies.
   ```bash
   bundle install
   ```

## Run Locally

Start the local Jekyll server:

```bash
bundle exec jekyll serve
```

Then open:

- `http://127.0.0.1:4000/`
- `http://127.0.0.1:4000/about.html`

## Build Check

If you just want to verify the site generates correctly:

```bash
bundle exec jekyll build
```

The generated site is written to `_site/`.

## Notes

- If you change `_config.yml`, restart the Jekyll server. That file is not reloaded automatically.
- The site loads Bootstrap and AOS from CDNs in the main layout, so local preview needs network access for the page to render fully.
- Most content comes from the `_data/` YAML files, so those are the best place to update timeline and project content.

## Deploying To GitHub Pages

This site is set up to work with GitHub Pages using the `github-pages` gem pinned in the repo.

For this repository, there is no checked-in GitHub Actions workflow, and the default branch is `main`, so the expected Pages configuration is to publish from the `main` branch at the repository root.

Typical deployment flow:

1. Make your changes locally.
2. Verify the site builds cleanly with:
   ```bash
   bundle exec jekyll build
   ```
3. Commit and push your branch to GitHub.
4. Merge into `main`.

GitHub Pages should then rebuild the site automatically from the repository source. If the Pages settings in GitHub were changed from the default, use whatever branch or folder is configured there instead.

## Tech Stack

- Jekyll 3.9.5 via `github-pages`
- Minima theme
- Jekyll Feed plugin
- Bootstrap 5
- Bootstrap Icons
- AOS animations

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Search does not work in this mode: the search index is only created by a production build. To try search locally, build and serve the site:

```bash
npm run preview
```

This opens the built site at http://localhost:3000. Run it again after editing the docs to update the search index.

## Adding a page

1. Create a Markdown file in the `docs/` folder, for example `docs/dashboard.md`.
2. Add a title at the top:

   ```md
   ---
   title: Dashboard
   sidebar_position: 2
   ---
   ```

3. Write the content below it. The page appears in the sidebar automatically.

To group pages, put them in a folder (for example `docs/settings/`) and add a `_category_.json` with the section label.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

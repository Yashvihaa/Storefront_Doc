---
slug: /
sidebar_position: 1
title: Introduction
---

<head>
  <title>Storefront Docs</title>
</head>

# Storefront Documentation

Welcome to the Storefront documentation. These pages explain how to set up and use the Storefront admin panel.

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

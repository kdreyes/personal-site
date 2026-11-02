# katrinadelosreyes.com

The personal site of Katrina Delos Reyes and the home of **The Inner Intelligence Era**, an ongoing investigation into AI, software, work, and what happens to humans when intelligence becomes abundant.

Built with [Astro](https://astro.build), Markdown/MDX content, and static output deployed on Vercel.

## Develop

Requires Node 22.23+ (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321 (drafts visible)
npm run build     # production build to dist/ (drafts excluded)
npm run preview   # serve the production build
npm run check     # type-check
```

## Publish

See [docs/publishing.md](docs/publishing.md). In short: add a Markdown/MDX file under `src/content/`, run the publication firewall checklist, set `draft: false` and `firewall_check: true`, and push.

## Structure

```
src/
  content/          essays, research, notes, observatory, archive
  content.config.ts frontmatter schemas (the build fails on bad frontmatter)
  site.config.ts    names, nav, social links, newsletter provider, projects
  pages/            routes, RSS, robots.txt, social-preview images
  layouts/          BaseLayout (head, nav, footer) and ArticleLayout
  components/       small, mostly JS-free building blocks
  lib/              content queries, structured data, formatting
  styles/global.css design tokens, typography, prose, print
vercel.json         legacy redirects (/resume, /blog, /contact, …)
```

## License

Code: MIT (see `LICENSE`). Writing and research content © Katrina Delos Reyes, all rights reserved.

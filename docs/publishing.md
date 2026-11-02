# Publishing

Everything on the site is a Markdown (`.md`) or MDX (`.mdx`) file in `src/content/`. You never need to edit components to publish.

| Section     | Folder                     | URL                   |
| ----------- | -------------------------- | --------------------- |
| Essays      | `src/content/essays/`      | `/essays/<file-name>` |
| Research    | `src/content/research/`    | `/research/<file-name>` |
| Field Notes | `src/content/notes/`       | `/notes/<file-name>`  |
| Observatory | `src/content/observatory/` | `/observatory/<file-name>` |

The file name becomes the URL, so choose it carefully. `verification-gap.mdx` → `/essays/verification-gap`.

## Workflow

1. Copy an existing file in the right folder, such as `essays/verification-gap.mdx` or `notes/example-field-note.md`, and rename it.
2. Keep `draft: true` while writing. Run `npm run dev` and open http://localhost:4321 to see drafts.
3. When it's ready, go through the **publication firewall checklist** below.
4. Set `draft: false` and `firewall_check: true`.
5. Commit and push. Vercel builds a preview for any branch and deploys `main` to production.

The build fails if a non-draft piece doesn't have `firewall_check: true`, or if any frontmatter field is missing or malformed. The error names the file and the field.

## Frontmatter

Shared by every section:

```yaml
title: The Verification Gap
description: One or two sentences. Used in search results, social previews, and lists.
date: 2026-11-01
updated: 2026-12-15          # optional; shown as "Updated …"
topics: [AI-generated software, Software verification]
featured: false              # true = shown as "Current investigation" on the home page
draft: true
firewall_check: false
related:                     # optional; "collection/file-name"
  - research/measuring-ai-generated-software
reading_time: 14             # optional override (minutes)
canonical_url: https://…     # optional; only if first published elsewhere
```

Essays also accept `subtitle`, `series`, `type: essay | research-essay` and `toc: true | false`. The contents sidebar turns on automatically for pieces of 8 minutes or longer.

Research also accepts:

```yaml
status: Question | Researching | Experiment | Published | Ongoing
research_question: Which forms of independence actually increase confidence in AI-generated software?
hypothesis: …
competing_hypotheses: [ … ]
methodology_status: …
data_url: https://…
code_url: https://…
related_essay: essays/verification-gap
updates:
  - date: 2026-12-01
    note: What changed and why.
```

Notes also accept `source_url`.

## Writing helpers (MDX only)

These work in any `.mdx` file without importing anything:

```mdx
<Callout label="Limitation">Text…</Callout>

<PullQuote>A sentence worth repeating.</PullQuote>

<Figure src="/images/chart.svg" alt="What the chart shows" caption="Figure 1. … Source: …" />

<Placeholder label="Signal name" />   {/* clearly labelled "no data yet" box */}
```

Footnotes use standard Markdown: `text.[^1]` and then `[^1]: Source…` at the bottom. Put images in `public/images/` and reference them as `/images/…`.

## Publication firewall checklist

Professional experience may motivate questions and opinions. Evidence for factual claims must come from public or intentionally publishable sources. Before setting `firewall_check: true`, confirm that the piece contains **none** of the following:

- [ ] Internal employer metrics or internal AI-adoption results
- [ ] Non-public organizational strategy or unpublished business decisions
- [ ] Customer or program anecdotes, **even anonymized**
- [ ] Proprietary architectures, mission-system details, or security weaknesses
- [ ] Internal quotes
- [ ] Contract or proposal information
- [ ] Any other confidential technical information

And confirm the outsider test:

- [ ] *Could an intelligent outsider reconstruct the factual basis of this argument using the sources provided?*

For Observatory and research pages:

- [ ] No invented or illustrative numbers presented as data. Use `<Placeholder>` until real evidence exists.
- [ ] Hypotheses are labelled as hypotheses, not findings.

## Site settings

Names, navigation, social links, the newsletter provider, and the "I build things, too" projects are all in `src/site.config.ts`.

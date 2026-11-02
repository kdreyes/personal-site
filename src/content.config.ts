import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content schemas. A bad or missing frontmatter field fails the build,
 * so mistakes are caught before publishing. See docs/publishing.md.
 */

const base = {
  title: z.string(),
  description: z.string().max(320),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  topics: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  canonical_url: z.url().optional(),
  /** Override computed reading time (minutes). */
  reading_time: z.number().int().positive().optional(),
  /** Explicitly related work, as "collection/slug", e.g. "research/measuring-ai-generated-software". */
  related: z.array(z.string()).default([]),
  /**
   * Publication firewall. Set to true only after checking the piece against
   * the checklist in docs/publishing.md. Required for anything not a draft.
   */
  firewall_check: z.boolean().default(false),
};

type Gated = { draft: boolean; firewall_check: boolean };
const firewall = (d: Gated, ctx: z.RefinementCtx) => {
  if (!d.draft && !d.firewall_check) {
    ctx.addIssue({
      code: 'custom',
      message:
        'Publication firewall: set `firewall_check: true` after reviewing docs/publishing.md (or keep `draft: true`).',
      path: ['firewall_check'],
    });
  }
};

const essays = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/essays' }),
  schema: z
    .object({
      ...base,
      subtitle: z.string().optional(),
      series: z.string().optional(),
      type: z.enum(['essay', 'research-essay']).default('essay'),
      toc: z.boolean().optional(),
    })
    .superRefine(firewall),
});

export const RESEARCH_STATUS = ['Question', 'Researching', 'Experiment', 'Published', 'Ongoing'] as const;

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/research' }),
  schema: z
    .object({
      ...base,
      subtitle: z.string().optional(),
      series: z.string().optional(),
      status: z.enum(RESEARCH_STATUS),
      research_question: z.string(),
      hypothesis: z.string().optional(),
      competing_hypotheses: z.array(z.string()).default([]),
      methodology_status: z.string().optional(),
      data_url: z.url().optional(),
      code_url: z.url().optional(),
      related_essay: z.string().optional(),
      updates: z.array(z.object({ date: z.coerce.date(), note: z.string() })).default([]),
      toc: z.boolean().optional(),
    })
    .superRefine(firewall),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/notes' }),
  schema: z
    .object({
      ...base,
      source_url: z.url().optional(),
    })
    .superRefine(firewall),
});

export const OBSERVATORY_CATEGORIES = [
  'Capability',
  'Behavior',
  'Work',
  'Economics',
  'Institutions',
  'Humans',
] as const;

const observatory = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/observatory' }),
  schema: z
    .object({
      ...base,
      subtitle: z.string().optional(),
      domain: z.string(),
      categories: z.array(z.enum(OBSERVATORY_CATEGORIES)).default([]),
      status: z.enum(['Planned', 'Collecting', 'Active', 'Paused']),
      methodology: z.string().optional(),
    })
    .superRefine(firewall),
});

/** Legacy posts (externally hosted). Shown only on /archive. */
const archive = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.url(),
    venue: z.string(),
  }),
});

export const collections = { essays, research, notes, observatory, archive };

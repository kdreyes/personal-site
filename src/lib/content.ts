import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkCollection = 'essays' | 'research' | 'notes' | 'observatory';
type AnyEntry =
  | CollectionEntry<'essays'>
  | CollectionEntry<'research'>
  | CollectionEntry<'notes'>
  | CollectionEntry<'observatory'>;

/** One normalized shape for listing any piece of work. */
export interface WorkItem {
  key: string; // "collection/slug"
  collection: WorkCollection;
  slug: string;
  href: string;
  title: string;
  subtitle?: string;
  description: string;
  date: Date;
  updated?: Date;
  topics: string[];
  featured: boolean;
  minutes: number;
  typeLabel: string;
  status?: string;
  series?: string;
  related: string[];
}

const ROUTES: Record<WorkCollection, string> = {
  essays: '/essays',
  research: '/research',
  notes: '/notes',
  observatory: '/observatory',
};

export const sectionHref = (c: WorkCollection) => ROUTES[c];

const isPublished = (e: { data: { draft: boolean } }) => (import.meta.env.PROD ? !e.data.draft : true);

/** Words per minute for long-form reading. */
export function readingMinutes(body: string | undefined): number {
  if (!body) return 1;
  const text = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^(import|export) .*$/gm, '')
    .replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

function typeLabel(e: AnyEntry): string {
  switch (e.collection) {
    case 'essays':
      return e.data.type === 'research-essay' ? 'Research essay' : 'Essay';
    case 'research':
      return 'Research';
    case 'notes':
      return 'Field note';
    case 'observatory':
      return 'Observatory';
  }
}

export function toWorkItem(e: AnyEntry): WorkItem {
  const d = e.data as AnyEntry['data'] & Record<string, unknown>;
  return {
    key: `${e.collection}/${e.id}`,
    collection: e.collection,
    slug: e.id,
    href: `${ROUTES[e.collection]}/${e.id}`,
    title: d.title,
    subtitle: (d.subtitle as string | undefined) ?? undefined,
    description: d.description,
    date: d.date,
    updated: d.updated,
    topics: d.topics,
    featured: d.featured,
    minutes: d.reading_time ?? readingMinutes(e.body),
    typeLabel: typeLabel(e),
    status: (d.status as string | undefined) ?? undefined,
    series: (d.series as string | undefined) ?? undefined,
    related: d.related,
  };
}

const byDateDesc = (a: { date: Date }, b: { date: Date }) => b.date.valueOf() - a.date.valueOf();

export async function getEntries<C extends WorkCollection>(c: C): Promise<CollectionEntry<C>[]> {
  const entries = (await getCollection(c, isPublished)) as CollectionEntry<C>[];
  return entries.sort((a, b) => byDateDesc(a.data as { date: Date }, b.data as { date: Date }));
}

export async function getAllWork(): Promise<WorkItem[]> {
  const all = await Promise.all([
    getEntries('essays'),
    getEntries('research'),
    getEntries('notes'),
    getEntries('observatory'),
  ]);
  return all.flat().map((e) => toWorkItem(e as AnyEntry)).sort(byDateDesc);
}

/** The featured piece: newest item marked `featured: true`, else the newest essay or research. */
export async function getFeatured(): Promise<WorkItem | undefined> {
  const work = await getAllWork();
  return (
    work.find((w) => w.featured) ??
    work.find((w) => w.collection === 'essays' || w.collection === 'research')
  );
}

/**
 * Related work, ranked by intellectual connection rather than date:
 * explicit `related` links first (in both directions), then shared topics.
 */
export async function getRelated(item: WorkItem, limit = 3): Promise<WorkItem[]> {
  const work = (await getAllWork()).filter((w) => w.key !== item.key);
  const topics = new Set(item.topics.map((t) => t.toLowerCase()));
  const scored = work.map((w) => {
    let score = 0;
    if (item.related.includes(w.key)) score += 100;
    if (w.related.includes(item.key)) score += 50;
    score += w.topics.filter((t) => topics.has(t.toLowerCase())).length * 10;
    if (w.collection === 'essays' || w.collection === 'research') score += 1;
    return { w, score };
  });
  return scored
    .filter((s) => s.score > 1)
    .sort((a, b) => b.score - a.score || byDateDesc(a.w, b.w))
    .slice(0, limit)
    .map((s) => s.w);
}

/** Look up a work item by "collection/slug". */
export async function findWork(key: string | undefined): Promise<WorkItem | undefined> {
  if (!key) return undefined;
  return (await getAllWork()).find((w) => w.key === key);
}

export function groupByYear<T extends { date: Date }>(items: T[]): [number, T[]][] {
  const map = new Map<number, T[]>();
  for (const i of items) {
    const y = i.date.getUTCFullYear();
    map.set(y, [...(map.get(y) ?? []), i]);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

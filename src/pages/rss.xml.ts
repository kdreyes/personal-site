import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllWork } from '~/lib/content';
import { SITE } from '~/site.config';

export async function GET(context: APIContext) {
  const items = (await getAllWork()).filter((w) => w.collection !== 'observatory');
  return rss({
    title: `${SITE.name}: ${SITE.investigation}`,
    description: SITE.investigationDescriptor,
    site: context.site ?? SITE.url,
    items: items.map((w) => ({
      title: w.title,
      link: w.href,
      pubDate: w.date,
      description: w.description,
      categories: [w.typeLabel, ...w.topics],
      author: `${SITE.email} (${SITE.name})`,
    })),
    customData: `<language>en-us</language>`,
    trailingSlash: false,
  });
}

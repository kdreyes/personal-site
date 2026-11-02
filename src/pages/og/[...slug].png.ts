import fs from 'node:fs/promises';
import path from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getAllWork } from '~/lib/content';
import { SITE } from '~/site.config';

/**
 * Typographic social-preview cards, rendered at build time.
 * /og/default.png for general pages, /og/<collection>/<slug>.png for each piece.
 */

interface Card {
  title: string;
  label: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const work = await getAllWork();
  return [
    { params: { slug: 'default' }, props: { title: SITE.tagline, label: SITE.investigation } satisfies Card },
    ...work.map((w) => ({
      params: { slug: `${w.collection}/${w.slug}` },
      props: {
        title: w.title,
        label: [w.typeLabel, w.status, w.collection === 'essays' || w.collection === 'notes' ? `${w.minutes} min` : undefined]
          .filter(Boolean)
          .join(' · '),
      } satisfies Card,
    })),
  ];
};

const fontDir = path.join(process.cwd(), 'node_modules', '@fontsource');
let fonts: Promise<{ serif: Buffer; serifBold: Buffer; mono: Buffer }> | undefined;
const loadFonts = () =>
  (fonts ??= Promise.all([
    fs.readFile(path.join(fontDir, 'source-serif-4/files/source-serif-4-latin-400-normal.woff')),
    fs.readFile(path.join(fontDir, 'source-serif-4/files/source-serif-4-latin-600-normal.woff')),
    fs.readFile(path.join(fontDir, 'ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff')),
  ]).then(([serif, serifBold, mono]) => ({ serif, serifBold, mono })));

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { title, label } = props as Card;
  const f = await loadFonts();
  const size = title.length > 70 ? 56 : title.length > 40 ? 66 : 76;

  const tree = h(
    'div',
    {
      // satori adds padding outside the box, so size the content area explicitly (1200x630 total).
      width: 1040,
      height: 486,
      boxSizing: 'content-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
      background: '#fbfaf7',
      color: '#1b1a17',
      fontFamily: 'Serif',
    },
    [
      h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 22, letterSpacing: 2, color: '#6a665d', textTransform: 'uppercase' }, label),
      h('div', { display: 'flex', fontSize: size, fontWeight: 600, lineHeight: 1.08, letterSpacing: -1, maxWidth: 1000 }, title),
      h(
        'div',
        { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #1b1a17', paddingTop: 24 },
        [
          h('div', { display: 'flex', fontSize: 30, fontWeight: 600 }, SITE.name),
          h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 20, color: '#1f4b74' }, 'katrinadelosreyes.com'),
        ],
      ),
    ],
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Serif', data: f.serif, weight: 400, style: 'normal' },
      { name: 'Serif', data: f.serifBold, weight: 600, style: 'normal' },
      { name: 'Mono', data: f.mono, weight: 500, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};

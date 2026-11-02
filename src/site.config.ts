/**
 * Site-wide settings. Edit this file to change names, links, navigation,
 * or the newsletter provider. No component changes needed.
 */

export const SITE = {
  url: 'https://katrinadelosreyes.com',
  name: 'Katrina Delos Reyes',
  /** Umbrella for the current body of work. */
  investigation: 'The Inner Intelligence Era',
  tagline: 'Software is changing first. Humans are the bigger story.',
  description:
    'Katrina Delos Reyes writes and researches AI, software engineering, work, and what happens to humans when intelligence becomes abundant.',
  investigationDescriptor:
    'An ongoing investigation into AI, software, work, and what happens to humans when intelligence becomes abundant.',
  locale: 'en-US',
  /** Shown on About and in the footer. Set up forwarding for this address before launch. */
  email: 'hello@katrinadelosreyes.com',
} as const;

export const PERSON_ID = `${SITE.url}/about#person`;

export const NAV = [
  { href: '/essays', label: 'Essays' },
  { href: '/observatory', label: 'Observatory' },
  { href: '/research', label: 'Research' },
  { href: '/notes', label: 'Field Notes' },
  { href: '/about', label: 'About' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/kdreyes',
  linkedin: 'https://www.linkedin.com/in/katrinamdelosreyes/',
} as const;

/**
 * Newsletter provider. To switch providers, change `action` (and field names
 * if needed). The form is plain HTML and works without JavaScript.
 */
export const NEWSLETTER = {
  provider: 'buttondown',
  action: 'https://buttondown.com/api/emails/embed-subscribe/katrinadelosreyes',
  emailField: 'email',
  /** Extra hidden fields sent with the form. */
  hidden: { embed: '1' } as Record<string, string>,
} as const;

/**
 * Things Katrina builds outside the research. Shown only on /about.
 * Keep each description to one sentence.
 */
export const PROJECTS = [
  {
    name: 'Planue',
    url: 'https://planue.co',
    description: 'A technology project exploring better infrastructure for planning and running weddings.',
  },
  {
    name: 'Women&TECH',
    url: 'https://www.womenandtechhq.org/',
    description: 'A community built around creating a softer, more human landing place for women working in technology.',
  },
  {
    name: 'K. Mae Weddings',
    url: 'https://kmaeweddings.com',
    description:
      'A wedding planning and coordination business serving couples primarily in the DMV and selectively in Utah, where I work with couples as Katrina Mae.',
    /** The business's public, wedding-facing name for its founder. */
    publicName: 'Katrina Mae',
  },
] as const;

export const TOPICS_OF_EXPERTISE = [
  'Artificial intelligence',
  'Software engineering',
  'AI-generated software',
  'Coding agents',
  'Software verification',
  'Software assurance',
  'AI code review',
  'Engineering organizations',
  'AI and work',
  'Expertise',
  'Human judgment',
];

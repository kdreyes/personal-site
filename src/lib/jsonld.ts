import { SITE, PERSON_ID, SOCIAL, PROJECTS, TOPICS_OF_EXPERTISE } from '~/site.config';
import type { WorkItem } from './content';

/**
 * Structured data. Everything here mirrors facts visible on the page.
 * The Person node lives on /about; other pages refer to it by @id.
 */

const WORK_ID = `${SITE.url}/#the-inner-intelligence-era`;

export const personRef = { '@id': PERSON_ID };

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.locale,
        author: personRef,
        publisher: personRef,
      },
      {
        '@type': 'CreativeWorkSeries',
        '@id': WORK_ID,
        name: SITE.investigation,
        description: SITE.investigationDescriptor,
        url: SITE.url,
        author: personRef,
      },
    ],
  };
}

export function personLd() {
  const orgs = PROJECTS.map((p) => ({
    '@type': 'Organization',
    '@id': `${SITE.url}/about#org-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: p.name,
    ...(p.url ? { url: p.url } : {}),
    description:
      'publicName' in p
        ? `${p.description.replace(/, where I work with couples as Katrina Mae\.$/, '.')} Its founder works with couples under the name ${p.publicName}.`
        : p.description,
    founder: personRef,
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${SITE.url}/about`,
        url: `${SITE.url}/about`,
        name: `About ${SITE.name}`,
        mainEntity: personRef,
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.name,
        givenName: 'Katrina',
        familyName: 'Delos Reyes',
        url: `${SITE.url}/about`,
        jobTitle: 'Engineering leader',
        description:
          'Engineering leader, writer, and independent researcher studying how AI is changing software engineering and what follows for work, organizations, and people.',
        knowsAbout: TOPICS_OF_EXPERTISE,
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Maryland, College Park' },
        sameAs: [SOCIAL.github, SOCIAL.linkedin],
        founder: orgs.map((o) => ({ '@id': o['@id'] })),
      },
      ...orgs,
    ],
  };
}

export function articleLd(item: WorkItem, opts: { image: string }) {
  const type =
    item.collection === 'research' ? 'ScholarlyArticle' : item.collection === 'notes' ? 'BlogPosting' : 'Article';
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${SITE.url}${item.href}#article`,
    headline: item.title,
    ...(item.subtitle ? { alternativeHeadline: item.subtitle } : {}),
    description: item.description,
    url: `${SITE.url}${item.href}`,
    mainEntityOfPage: `${SITE.url}${item.href}`,
    datePublished: item.date.toISOString(),
    dateModified: (item.updated ?? item.date).toISOString(),
    author: { ...personRef, '@type': 'Person', name: SITE.name, url: `${SITE.url}/about` },
    publisher: personRef,
    image: opts.image,
    keywords: item.topics.join(', '),
    about: item.topics.map((t) => ({ '@type': 'Thing', name: t })),
    isPartOf: { '@id': WORK_ID },
    inLanguage: SITE.locale,
    timeRequired: `PT${item.minutes}M`,
  };
}

import type { OBSERVATORY_CATEGORIES } from '~/content.config';

type Category = (typeof OBSERVATORY_CATEGORIES)[number];

export const CATEGORIES: { name: Category; question: string }[] = [
  { name: 'Capability', question: 'What can AI systems actually do?' },
  { name: 'Behavior', question: 'How are people changing how they work?' },
  { name: 'Work', question: 'How are tasks, skills, roles, and organizations changing?' },
  { name: 'Economics', question: 'What is becoming abundant, and what is becoming scarce?' },
  {
    name: 'Institutions',
    question: 'How are education, government, defense, healthcare, regulation, and other systems responding?',
  },
  {
    name: 'Humans',
    question: 'What is happening to identity, ambition, creativity, relationships, responsibility, and purpose?',
  },
];

export const FUTURE_DOMAINS = [
  'Education',
  'Labor',
  'Arts and writing',
  'Finance',
  'Healthcare',
  'Legal',
  'Defense and high-consequence systems',
  'Blue-collar work and the trades',
  'Organizations and management',
];

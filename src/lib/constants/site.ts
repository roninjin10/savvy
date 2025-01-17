import type { Metadata } from 'next';

import { MetadataExtra, Page } from '@/lib/types/site';

const title = 'savvy';
const description = 'savvy description';
const authorUrl = 'https://twitter.com/0xpolarzero';
const websiteUrl = 'https://savvy.polarzero.xyz';

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const METADATA_BASE: Metadata = {
  title: title,
  description: description,
  applicationName: title,
  authors: { url: authorUrl, name: 'polarzero' },
  keywords: [],
  twitter: {
    site: '@0xpolarzero',
  },
  // robots? icons?
  // manifest
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: websiteUrl,
    siteName: title,
    title: title,
    description: description,
    emails: ['contact@polarzero.xyz'],
    images: [
      {
        url: `${websiteUrl}/static/og/home.png`,
        width: 1200,
        height: 630,
        alt: `${title} open-graph image`,
      },
    ],
  },
};

export const METADATA_EXTRA: MetadataExtra = {
  links: {
    github: 'https://github.com/0xpolarzero/savvy',
    twitter: 'https://twitter.com/0xpolarzero',
  },
};

/* -------------------------------------------------------------------------- */
/*                                 NAVIGATION                                 */
/* -------------------------------------------------------------------------- */

export const NAVBAR_SOLUTIONS: Page[] = [
  {
    name: 'Airdrop',
    slug: '/solutions/airdrop',
    description: 'Find the most optimized airdrop solution for your use case',
  },
];

import type { Metadata } from 'next';

import { env } from '@/env';
import { paths } from '@routes/paths';

// Site name per language: the header and Open Graph show it in the reader's language.
const SITE_NAME = { en: 'Upcoming Wave', pl: 'Nadchodząca fala' } as const;

type LocaleMetadata = { locale: 'en' | 'pl'; title: string; description: string; page?: 'home' | 'sources' };

const OG_IMAGE = { url: '/og/upcoming-wave-og.jpg', width: 1200, height: 630, alt: 'The same wave, two futures: a dark wave over a city on the left, a golden wave over a park on the right.' };

// Shared metadata for both language roots: canonical, hreflang, Open Graph and X cards.
export const buildMetadata = ({ locale, title, description, page = 'home' }: LocaleMetadata): Metadata => {
  const pathFor = (target: 'en' | 'pl') => (page === 'sources' ? paths.sources(target) : paths.home(target));
  return {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title,
  description,
  applicationName: SITE_NAME[locale],
  alternates: {
    canonical: pathFor(locale),
    languages: { en: pathFor('en'), pl: pathFor('pl'), 'x-default': pathFor('en') },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME[locale],
    title,
    description,
    url: pathFor(locale),
    locale: locale === 'pl' ? 'pl_PL' : 'en_US',
    alternateLocale: locale === 'pl' ? ['en_US'] : ['pl_PL'],
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url], creator: '@blyzbyte' },
  robots: { index: true, follow: true },
  };
};

// Structured data for search engines: the site, and the page as an article citing the book.
export const buildJsonLd = ({ locale, title, description }: LocaleMetadata): string => {
  const url = new URL(paths.home(locale), env.NEXT_PUBLIC_SITE_URL).toString();
  const author = { '@type': 'Person', name: '@blyzbyte', url: 'https://x.com/blyzbyte' };
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE_NAME[locale], url, inLanguage: locale },
      {
        '@type': 'Article',
        headline: title,
        description,
        url,
        inLanguage: locale,
        image: new URL(OG_IMAGE.url, env.NEXT_PUBLIC_SITE_URL).toString(),
        author,
        publisher: author,
        isAccessibleForFree: true,
        citation: { '@type': 'Book', name: 'The Coming Wave', author: ['Mustafa Suleyman', 'Michael Bhaskar'], datePublished: '2023' },
      },
    ],
  }).replace(/</g, '\\u003c');
};

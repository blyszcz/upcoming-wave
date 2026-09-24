import type { Metadata } from 'next';

import { env } from '@/env';
import { locales, type Locale } from '@features/upcomingWave/content/locales';
import { paths } from '@routes/paths';

type Page = 'home' | 'sources';
type PageMetadata = { locale: Locale; page?: Page };

// Link-preview card with the headline baked in (X shows only the image). Regenerate with scripts/og-cards.py.
const ogImageUrl = (locale: Locale) => `/og/upcoming-wave-og-${locale}.jpg`;

const pathFor = (locale: Locale, page: Page) => (page === 'sources' ? paths.sources(locale) : paths.home(locale));

// Shared metadata for both language roots: canonical, hreflang, Open Graph and X cards. All copy comes from content/<locale>/site.ts.
export const buildMetadata = ({ locale, page = 'home' }: PageMetadata): Metadata => {
  const { meta } = locales[locale].site;
  const { title, description } = meta[page];
  const image = { url: ogImageUrl(locale), width: 1200, height: 630, alt: meta.ogAlt };
  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title,
    description,
    applicationName: meta.siteName,
    alternates: {
      canonical: pathFor(locale, page),
      languages: { en: pathFor('en', page), pl: pathFor('pl', page), 'x-default': pathFor('en', page) },
    },
    openGraph: {
      type: 'website',
      siteName: meta.siteName,
      title,
      description,
      url: pathFor(locale, page),
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      alternateLocale: locale === 'pl' ? ['en_US'] : ['pl_PL'],
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url], creator: '@blyzbyte' },
    robots: { index: true, follow: true },
  };
};

// Structured data for search engines: the site, and the page as an article citing the book.
export const buildJsonLd = (locale: Locale): string => {
  const { meta } = locales[locale].site;
  const url = new URL(paths.home(locale), env.NEXT_PUBLIC_SITE_URL).toString();
  const author = { '@type': 'Person', name: '@blyzbyte', url: 'https://x.com/blyzbyte' };
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: meta.siteName, url, inLanguage: locale },
      {
        '@type': 'Article',
        headline: meta.home.title,
        description: meta.home.description,
        url,
        inLanguage: locale,
        image: new URL(ogImageUrl(locale), env.NEXT_PUBLIC_SITE_URL).toString(),
        author,
        publisher: author,
        isAccessibleForFree: true,
        citation: { '@type': 'Book', name: 'The Coming Wave', author: ['Mustafa Suleyman', 'Michael Bhaskar'], datePublished: '2023' },
      },
    ],
  }).replace(/</g, '\\u003c');
};

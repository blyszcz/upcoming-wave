import type { Metadata } from 'next';

import { env } from '@/env';
import { paths } from '@routes/paths';

type LocaleMetadata = { locale: 'en' | 'pl'; title: string; description: string; page?: 'home' | 'sources' };

const OG_IMAGE = { url: '/og/upcoming-wave-og.jpg', width: 1200, height: 630, alt: 'The same wave, two futures: a dark wave over a city on the left, a golden wave over a park on the right.' };

// Shared metadata for both language roots: canonical, hreflang, Open Graph and X cards.
export const buildMetadata = ({ locale, title, description, page = 'home' }: LocaleMetadata): Metadata => {
  const pathFor = (target: 'en' | 'pl') => (page === 'sources' ? paths.sources(target) : paths.home(target));
  return {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title,
  description,
  applicationName: 'Upcoming Wave',
  alternates: {
    canonical: pathFor(locale),
    languages: { en: pathFor('en'), pl: pathFor('pl'), 'x-default': pathFor('en') },
  },
  openGraph: {
    type: 'website',
    siteName: 'Upcoming Wave',
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

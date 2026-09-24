import type { MetadataRoute } from 'next';

import { env } from '@/env';
import { LOCALE_INFO, LOCALES } from '@routes/locales';
import { paths } from '@routes/paths';

export const dynamic = 'force-static';

const absolute = (path: string) => new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();

// Every language's home and sources page, each listing all its translations (hreflang).
export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = (pathFor: (code: (typeof LOCALES)[number]) => string) => ({
    languages: Object.fromEntries(LOCALES.map((code) => [LOCALE_INFO[code].htmlLang, absolute(pathFor(code))])),
  });
  return [
    ...LOCALES.map((code) => ({ url: absolute(paths.home(code)), changeFrequency: 'monthly' as const, priority: code === 'en' ? 1 : 0.9, alternates: alternates(paths.home) })),
    ...LOCALES.map((code) => ({ url: absolute(paths.sources(code)), changeFrequency: 'monthly' as const, priority: 0.4, alternates: alternates(paths.sources) })),
  ];
}

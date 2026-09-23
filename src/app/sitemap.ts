import type { MetadataRoute } from 'next';

import { env } from '@/env';
import { paths } from '@routes/paths';

export const dynamic = 'force-static';

const absolute = (path: string) => new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: absolute(paths.en), pl: absolute(paths.pl) };
  return [
    { url: absolute(paths.en), changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: absolute(paths.pl), changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
  ];
}

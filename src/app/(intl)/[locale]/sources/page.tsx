import type { Locale } from '@routes/locales';
import type { Metadata } from 'next';

import { buildMetadata } from '@/app/siteMetadata';
import { UpcomingWaveSources } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

type PageProps = { params: Promise<{ locale: string }> };

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => buildMetadata({ locale: (await params).locale as Locale, page: 'sources' });

export default async function Page({ params }: PageProps) {
  return <UpcomingWaveSources locale={(await params).locale as Locale} />;
}

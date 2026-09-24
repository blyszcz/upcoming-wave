import type { Metadata } from 'next';

import { buildMetadata } from '@/app/siteMetadata';
import { UpcomingWaveSources } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export const metadata: Metadata = buildMetadata({ locale: 'pl', page: 'sources' });

export default function Page() {
  return <UpcomingWaveSources locale="pl" />;
}

import type { Metadata } from 'next';

import { buildMetadata } from '@/app/siteMetadata';
import { UpcomingWaveSources } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export const metadata: Metadata = buildMetadata({
  locale: 'en',
  page: 'sources',
  title: 'Sources & method — Upcoming Wave',
  description: 'Every source behind the numbers and quotes on Upcoming Wave, and how we check them.',
});

export default function Page() {
  return <UpcomingWaveSources locale="en" />;
}

import type { Metadata } from 'next';

import { buildMetadata } from '@/app/siteMetadata';
import { UpcomingWaveSources } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export const metadata: Metadata = buildMetadata({
  locale: 'pl',
  page: 'sources',
  title: 'Źródła i metoda — Upcoming Wave',
  description: 'Wszystkie źródła liczb i cytatów na stronie Upcoming Wave oraz to, jak je sprawdzamy.',
});

export default function Page() {
  return <UpcomingWaveSources locale="pl" />;
}

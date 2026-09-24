import type { Metadata } from 'next';

import { UpcomingWaveArchive } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export const metadata: Metadata = { title: 'Archive — not published', robots: { index: false, follow: false } };

export default function Page() {
  return <UpcomingWaveArchive locale="en" />;
}

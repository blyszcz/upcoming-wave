import { notFound } from 'next/navigation';

import type { Metadata } from 'next';


import { UpcomingWaveArchive } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export const metadata: Metadata = { title: 'Archive — not published', robots: { index: false, follow: false } };

// The frozen archive exists only in English and Polish.
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== 'pl') notFound();
  return <UpcomingWaveArchive locale="pl" />;
}

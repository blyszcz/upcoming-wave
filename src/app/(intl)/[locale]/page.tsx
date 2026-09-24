import type { Locale } from '@routes/locales';

import { UpcomingWaveExperience } from '@features/upcomingWave/components/UpcomingWaveExperience/UpcomingWaveExperience';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <UpcomingWaveExperience locale={(await params).locale as Locale} />;
}

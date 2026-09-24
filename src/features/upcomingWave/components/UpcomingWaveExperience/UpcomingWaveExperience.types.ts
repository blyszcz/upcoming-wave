import type { Locale } from '@routes/locales';

export type UpcomingWaveExperienceProps = { locale?: Locale };
// The frozen archive exists only in English and Polish.
export type UpcomingWaveArchiveProps = { locale?: 'en' | 'pl' };

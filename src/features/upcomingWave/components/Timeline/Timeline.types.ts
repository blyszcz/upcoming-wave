import type { Source, TimelineStep } from '@features/upcomingWave/types/scene.types';

export type TimelineProps = { title: string; steps: TimelineStep[]; footnote: string; sources: Source[]; highlights?: number[] };

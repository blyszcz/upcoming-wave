import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { Source } from '@features/upcomingWave/types/scene.types';

export type GrowthChartProps = { title: string; subtitle: string; note: string; source: Source; points: HorizonPoint[]; doublingMonths: number };

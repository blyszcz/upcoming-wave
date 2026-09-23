import type { Source, TaxPart } from '@features/upcomingWave/types/scene.types';

export type TaxSplitProps = { title: string; subtitle: string; parts: TaxPart[]; caption: string; countries: { name: string; value: number }[]; countriesLabel: string; source: Source };

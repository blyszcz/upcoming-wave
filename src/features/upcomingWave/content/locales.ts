import type { Content } from './pl';
import type { Locale } from '@routes/locales';

import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { ja } from './ja';
import { pl } from './pl';
import { pt } from './pt';

export type { Locale } from '@routes/locales';

export const locales: Record<Locale, Content> = { en, pl, es, pt, de, fr, ja };

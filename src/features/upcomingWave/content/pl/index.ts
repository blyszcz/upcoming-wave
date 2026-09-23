import { acceleration, horizonPoints } from './acceleration';
import { calm } from './calm';
import { chain } from './chain';
import { finale, split } from './closing';
import { hero } from './hero';
import { scenes } from './scenes';
import { site } from './site';
import { story } from './story';
import { ui } from './ui';
import { voices } from './voices';

export const pl = { acceleration, horizonPoints, calm, chain, finale, split, hero, scenes, site, story, ui, voices };

export type Content = typeof pl;

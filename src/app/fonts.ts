import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google';

const sans = Inter_Tight({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], variable: '--font-sans' });
const serif = Instrument_Serif({ subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext'], weight: ['400', '500'], variable: '--font-mono' });

export const fontVariables = `${sans.variable} ${serif.variable} ${mono.variable}`;

import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google';

import './globals.css';

const sans = Inter_Tight({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], variable: '--font-sans' });
const serif = Instrument_Serif({ subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Nadchodząca fala — dlaczego ludzie proszą o zasady dla AI',
  description: 'Wizualna opowieść o tym, jak AI zmienia pracę szybciej, niż ludzie i państwa zdążą się dostosować — i dlaczego regulacje mają znaczenie.',
};

export const viewport: Viewport = { themeColor: '#070b10' };

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

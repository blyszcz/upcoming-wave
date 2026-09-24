import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildJsonLd, buildMetadata } from '@/app/siteMetadata';
import { localeRedirectScript } from '@features/upcomingWave/lib/localePreference';

import '@/styles/globals.css';

const page = {
  locale: 'en' as const,
  title: 'AI could be the best thing we ever built — or the worst',
  description: 'A short visual guide to what AI could do to work, money and power, what could go right, and why the people building it are asking for rules. Every fact is sourced.',
};

export const metadata: Metadata = buildMetadata(page);

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd(page) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

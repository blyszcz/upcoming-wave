import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildJsonLd, buildMetadata } from '@/app/siteMetadata';
import { localeRedirectScript } from '@features/upcomingWave/lib/localePreference';

import '@/styles/globals.css';

export const metadata: Metadata = buildMetadata({ locale: 'en' });

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd('en') }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

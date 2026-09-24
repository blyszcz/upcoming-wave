import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildJsonLd, buildMetadata } from '@/app/siteMetadata';
import '@/styles/globals.css';

export const metadata: Metadata = buildMetadata({ locale: 'pl' });

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={fontVariables}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd('pl') }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

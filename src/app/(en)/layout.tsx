import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildMetadata } from '@/app/siteMetadata';
import { localeRedirectScript } from '@features/upcomingWave/lib/localePreference';

import '@/styles/globals.css';

export const metadata: Metadata = buildMetadata({
  locale: 'en',
  title: 'Why AI’s own creators are asking for rules',
  description: 'A visual story of how AI could change work, money and the state faster than we can adapt — and why the people building it are asking to be regulated.',
});

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

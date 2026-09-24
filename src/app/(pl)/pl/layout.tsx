import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildJsonLd, buildMetadata } from '@/app/siteMetadata';
import '@/styles/globals.css';

const page = {
  locale: 'pl' as const,
  title: 'AI może być najlepszą rzeczą, jaką stworzyliśmy — albo najgorszą',
  description: 'Krótki wizualny przewodnik: co AI może zrobić z pracą, pieniędzmi i władzą, co może pójść dobrze i dlaczego jej twórcy proszą o zasady. Przy każdym fakcie źródło.',
};

export const metadata: Metadata = buildMetadata(page);

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={fontVariables}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd(page) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildMetadata } from '@/app/siteMetadata';
import '@/styles/globals.css';

export const metadata: Metadata = buildMetadata({
  locale: 'pl',
  title: 'AI może być najlepszą rzeczą, jaką stworzyliśmy — albo najgorszą',
  description: 'Krótki wizualny przewodnik: co AI może zrobić z pracą, pieniędzmi i władzą, co może pójść dobrze i dlaczego jej twórcy proszą o zasady. Przy każdym fakcie źródło.',
});

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}

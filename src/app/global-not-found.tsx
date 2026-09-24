import type { Metadata } from 'next';

import { fontVariables } from '@/app/fonts';
import { paths } from '@routes/paths';

import '@/styles/globals.css';

export const metadata: Metadata = { title: '404 - Upcoming Wave', robots: { index: false, follow: false } };

// One bilingual 404 for both language roots (static export writes it to 404.html).
export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <main className="uw-not-found">
          <p className="uw-eyebrow">404</p>
          <h1 className="uw-title">This page drifted away. <em>Nie ma takiej strony.</em></h1>
          <div className="uw-not-found-links">
            <a className="uw-cta" href={paths.home('en')}>Go to the start →</a>
            <a className="uw-text-button" href={paths.home('pl')} lang="pl">Wersja polska →</a>
          </div>
        </main>
      </body>
    </html>
  );
}

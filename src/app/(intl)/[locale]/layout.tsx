import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import { buildJsonLd, buildMetadata } from '@/app/siteMetadata';
import { LOCALE_INFO, PREFIXED_LOCALES, type Locale } from '@routes/locales';

import '@/styles/globals.css';

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>;

// Root layout for every language except English (which lives at `/`). Only the listed locales are built.
export const dynamicParams = false;
export const generateStaticParams = () => PREFIXED_LOCALES.map((locale) => ({ locale }));

export const generateMetadata = async ({ params }: LayoutProps): Promise<Metadata> => buildMetadata({ locale: (await params).locale as Locale });

export const viewport: Viewport = { themeColor: '#070b10' };

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = (await params).locale as Locale;
  return (
    <html lang={LOCALE_INFO[locale].htmlLang} className={fontVariables}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd(locale) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

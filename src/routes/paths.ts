import { DEFAULT_LOCALE, type Locale } from '@routes/locales';

const prefix = (locale: Locale) => (locale === DEFAULT_LOCALE ? '' : `/${locale}`);

export const paths = {
  home: (locale: Locale) => `${prefix(locale)}/`,
  sources: (locale: Locale) => `${prefix(locale)}/sources/`,
  section: (id: string) => `#${id}`,
  sourceAnchor: (number: number) => `#source-${number}`,
} as const;

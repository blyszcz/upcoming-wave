type LocaleKey = 'en' | 'pl';

export const paths = {
  en: '/',
  pl: '/pl/',
  home: (locale: LocaleKey) => (locale === 'pl' ? '/pl/' : '/'),
  sources: (locale: LocaleKey) => (locale === 'pl' ? '/pl/sources/' : '/sources/'),
  section: (id: string) => `#${id}`,
  sourceAnchor: (number: number) => `#source-${number}`,
} as const;

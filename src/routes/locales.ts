// Every language the site is published in. English lives at `/`, the others at `/<code>/`.
export const LOCALES = ['en', 'pl', 'es', 'pt', 'de', 'fr', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Locales served under their own path prefix (everything except the default).
export const PREFIXED_LOCALES = LOCALES.filter((locale): locale is Exclude<Locale, 'en'> => locale !== DEFAULT_LOCALE);

type LocaleInfo = { name: string; short: string; htmlLang: string; ogLocale: string };

// `name` is always in the language itself, so the picker reads naturally for everyone.
export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  pl: { name: 'Polski', short: 'PL', htmlLang: 'pl', ogLocale: 'pl_PL' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
  pt: { name: 'Português (Brasil)', short: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  de: { name: 'Deutsch', short: 'DE', htmlLang: 'de', ogLocale: 'de_DE' },
  fr: { name: 'Français', short: 'FR', htmlLang: 'fr', ogLocale: 'fr_FR' },
  ja: { name: '日本語', short: 'JA', htmlLang: 'ja', ogLocale: 'ja_JP' },
};

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

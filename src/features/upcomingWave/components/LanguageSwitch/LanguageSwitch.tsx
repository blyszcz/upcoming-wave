'use client';

import type { LanguageSwitchProps } from './LanguageSwitch.types';

import { useLanguageSwitch } from '@features/upcomingWave/hooks/useLanguageSwitch';

export const LanguageSwitch = ({ label, href, ariaLabel }: LanguageSwitchProps) => {
  const locale = label.toLowerCase();
  const { handleSwitch } = useLanguageSwitch(locale, href);

  return <a className="uw-lang" href={href} hrefLang={locale} aria-label={ariaLabel} onClick={handleSwitch}>{label}</a>;
};

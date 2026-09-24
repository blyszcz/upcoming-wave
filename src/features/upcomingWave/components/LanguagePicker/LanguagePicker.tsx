'use client';

import type { LanguagePickerProps } from './LanguagePicker.types';

import { useDismissableDetails } from '@features/upcomingWave/hooks/useDismissableDetails';
import { useLanguageSwitch } from '@features/upcomingWave/hooks/useLanguageSwitch';
import { LOCALE_INFO, LOCALES } from '@routes/locales';
import { paths } from '@routes/paths';

// Compact language menu in the header: the current code, opening a list of every language by its own name.
export const LanguagePicker = ({ locale, page, label }: LanguagePickerProps) => {
  const ref = useDismissableDetails();
  const { handleSwitch } = useLanguageSwitch();
  const hrefFor = page === 'sources' ? paths.sources : paths.home;

  return (
    <details ref={ref} className="uw-lang-picker">
      <summary className="uw-lang" aria-label={label}>{LOCALE_INFO[locale].short}<span aria-hidden="true">▾</span></summary>
      <ul>
        {LOCALES.map((code) => (
          <li key={code}>
            <a
              href={hrefFor(code)}
              hrefLang={LOCALE_INFO[code].htmlLang}
              lang={LOCALE_INFO[code].htmlLang}
              aria-current={code === locale ? 'true' : undefined}
              data-locale={code}
              onClick={handleSwitch}
            >
              {LOCALE_INFO[code].name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

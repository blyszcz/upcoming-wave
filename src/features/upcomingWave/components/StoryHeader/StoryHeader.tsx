'use client';

import { useContent } from '../../content/ContentProvider';
import { LOCALE_STORAGE_KEY } from '../../lib/localePreference';
import { DominoProgress } from '../DominoProgress/DominoProgress';

export const StoryHeader = () => {
  const { ui } = useContent();

  return (
    <header className="uw-header">
      <a href="#top" className="uw-brand"><span aria-hidden="true" />{ui.brand}</a>
      <div className="uw-header-right">
        <DominoProgress />
        {ui.langSwitch && <a className="uw-lang" href={ui.langSwitch.href} hrefLang={ui.langSwitch.label.toLowerCase()} aria-label={ui.langSwitch.ariaLabel} onClick={(event) => {
          try { localStorage.setItem(LOCALE_STORAGE_KEY, ui.langSwitch?.label.toLowerCase() ?? 'en'); } catch { /* storage unavailable */ }
          event.currentTarget.href = `${ui.langSwitch?.href ?? '/'}${window.location.hash}`;
        }}>{ui.langSwitch.label}</a>}
      </div>
    </header>
  );
};

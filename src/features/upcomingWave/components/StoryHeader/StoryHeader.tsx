'use client';

import { useContent } from '../../content/ContentProvider';
import { DominoProgress } from '../DominoProgress/DominoProgress';

export const StoryHeader = () => {
  const { ui } = useContent();

  return (
    <header className="uw-header">
      <a href="#top" className="uw-brand"><span aria-hidden="true" />{ui.brand}</a>
      <div className="uw-header-right">
        <DominoProgress />
        {ui.langSwitch && <a className="uw-lang" href={ui.langSwitch.href} hrefLang={ui.langSwitch.label.toLowerCase()} aria-label={ui.langSwitch.ariaLabel}>{ui.langSwitch.label}</a>}
      </div>
    </header>
  );
};

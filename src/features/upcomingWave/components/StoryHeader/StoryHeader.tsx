'use client';

import { DominoProgress } from '@features/upcomingWave/components/DominoProgress/DominoProgress';
import { LanguageSwitch } from '@features/upcomingWave/components/LanguageSwitch/LanguageSwitch';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const StoryHeader = () => {
  const { ui } = useContent();

  return (
    <header className="uw-header">
      <a href="#top" className="uw-brand"><span aria-hidden="true" />{ui.brand}</a>
      <div className="uw-header-right">
        <DominoProgress />
        {ui.langSwitch && <LanguageSwitch {...ui.langSwitch} />}
      </div>
    </header>
  );
};

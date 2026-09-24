'use client';

import { DominoProgress } from '@features/upcomingWave/components/DominoProgress/DominoProgress';
import { LanguagePicker } from '@features/upcomingWave/components/LanguagePicker/LanguagePicker';
import { ReadingModeToggle } from '@features/upcomingWave/components/ReadingModeToggle/ReadingModeToggle';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { isLocale } from '@routes/locales';

export const StoryHeader = () => {
  const { ui } = useContent();

  return (
    <header className="uw-header">
      <a href="#top" className="uw-brand"><span aria-hidden="true" />{ui.brand}</a>
      <div className="uw-header-right">
        <DominoProgress />
        <ReadingModeToggle />
        {isLocale(ui.lang) && <LanguagePicker locale={ui.lang} page="home" label={ui.languagePicker} />}
      </div>
    </header>
  );
};

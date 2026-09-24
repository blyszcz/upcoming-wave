'use client';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { paths } from '@routes/paths';

export const SiteFooter = () => {
  const { site, ui } = useContent();
  const { sources, independence, author } = site.footer;

  return (
    <footer className="uw-footer">
      <div>
        <p>{sources} <a className="uw-footer-inline" href={paths.sources(ui.lang === 'pl' ? 'pl' : 'en')}>{site.footer.sourcesLink}</a></p>
        <p>{independence}</p>
      </div>
      <p className="uw-footer-author">
        {author.label} <a href={author.url} target="_blank" rel="noopener noreferrer">{author.handle} ↗</a>{author.with && ` ${author.with}`}
      </p>
    </footer>
  );
};

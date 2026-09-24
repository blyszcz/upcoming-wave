'use client';

import { REPO_ISSUE_URL, REPO_URL } from '@/constants';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { DEFAULT_LOCALE, isLocale } from '@routes/locales';
import { paths } from '@routes/paths';

export const SiteFooter = () => {
  const { site, ui } = useContent();
  const { sources, independence, author } = site.footer;

  return (
    <footer className="uw-footer">
      <div>
        <p>{sources}</p>
        <p className="uw-footer-links">
          <a className="uw-footer-inline" href={paths.sources(isLocale(ui.lang) ? ui.lang : DEFAULT_LOCALE)}>{site.footer.sourcesLink}</a>
          <a className="uw-footer-inline" href={REPO_URL} target="_blank" rel="noopener noreferrer">{site.footer.code.label}</a>
          <a className="uw-footer-inline" href={REPO_ISSUE_URL} target="_blank" rel="noopener noreferrer">{site.footer.code.issue}</a>
        </p>
        <p className="uw-footer-note">{independence}</p>
      </div>
      <p className="uw-footer-author">
        {author.label} <a href={author.url} target="_blank" rel="noopener noreferrer">{author.handle} ↗</a>{author.with && ` ${author.with}`}
      </p>
    </footer>
  );
};

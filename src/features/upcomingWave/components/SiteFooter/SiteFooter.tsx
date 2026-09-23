'use client';

import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const SiteFooter = () => {
  const { site } = useContent();
  const { sources, independence, author } = site.footer;

  return (
    <footer className="uw-footer">
      <div>
        <p>{sources}</p>
        <p>{independence}</p>
      </div>
      <p className="uw-footer-author">
        {author.label} <a href={author.url} target="_blank" rel="noopener noreferrer">{author.handle} ↗</a>
      </p>
    </footer>
  );
};

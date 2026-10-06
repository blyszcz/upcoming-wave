'use client';

import { useState } from 'react';

import { COPIED_FEEDBACK_MS } from '@/constants';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

// One "Share" button: the phone's share sheet on touch devices, otherwise the link goes to the clipboard.
export const ShareBar = () => {
  const { site, ui } = useContent();
  const [isCopied, setIsCopied] = useState(false);

  const share = () => {
    const url = `${window.location.origin}${window.location.pathname}`;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch && navigator.share) {
      navigator.share({ title: document.title, text: ui.share.text, url }).catch(() => undefined);
      return;
    }
    navigator.clipboard?.writeText(url)
      .then(() => { setIsCopied(true); window.setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS); })
      .catch((error: unknown) => console.warn('Copying the link failed', error));
  };

  return (
    <div className="uw-share">
      <button type="button" className="uw-share-main" onClick={share} aria-live="polite">
        {isCopied ? ui.share.copied : ui.share.label} <span aria-hidden="true">{isCopied ? '✓' : '↗'}</span>
      </button>
      <a className="uw-share-follow" href={site.footer.author.url} target="_blank" rel="noopener noreferrer">{ui.share.follow} · {site.footer.author.handle}</a>
    </div>
  );
};

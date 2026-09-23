'use client';

import { useState } from 'react';

type ShareButtonProps = { sectionId: string; title: string };

const COPIED_MS = 2000;

export const ShareButton = ({ sectionId, title }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      try { await navigator.share({ title, url }); } catch { /* user closed the share sheet */ }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), COPIED_MS);
  };

  return (
    <button type="button" className="uw-share-button" onClick={share} aria-live="polite">
      {copied ? 'Skopiowano link ✓' : 'Udostępnij ↗'}
    </button>
  );
};

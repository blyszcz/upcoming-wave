'use client';

import { useState } from 'react';

import { COPIED_FEEDBACK_MS } from '@/constants';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

// One tap to pass the page on: the phone's share sheet when available, plus WhatsApp, Messenger/Facebook, X and copy.
export const ShareBar = () => {
  const { ui } = useContent();
  const [isCopied, setIsCopied] = useState(false);
  const url = () => `${window.location.origin}${window.location.pathname}`;
  const encode = (value: string) => encodeURIComponent(value);

  const open = (target: string) => window.open(target, '_blank', 'noopener,noreferrer');
  const nativeShare = () => {
    if (navigator.share) navigator.share({ title: document.title, text: ui.share.text, url: url() }).catch(() => undefined);
    else copy();
  };
  const copy = () => {
    navigator.clipboard?.writeText(url())
      .then(() => { setIsCopied(true); window.setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS); })
      .catch((error: unknown) => console.warn('Copying the link failed', error));
  };

  return (
    <div className="uw-share">
      <button type="button" className="uw-share-main" onClick={nativeShare}>{ui.share.label} <span aria-hidden="true">↗</span></button>
      <button type="button" className="uw-share-icon" onClick={() => open(`https://wa.me/?text=${encode(`${ui.share.text} ${url()}`)}`)}>WhatsApp</button>
      <button type="button" className="uw-share-icon" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encode(url())}`)}>Facebook</button>
      <button type="button" className="uw-share-icon" onClick={() => open(`https://x.com/intent/post?text=${encode(ui.share.text)}&url=${encode(url())}`)}>X</button>
      <button type="button" className="uw-share-icon" onClick={copy} aria-live="polite">{isCopied ? ui.share.copied : ui.share.copy}</button>
    </div>
  );
};

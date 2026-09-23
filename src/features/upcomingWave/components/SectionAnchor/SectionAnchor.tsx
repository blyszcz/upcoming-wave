'use client';

import { useState } from 'react';

import { useContent } from '../../content/ContentProvider';

const COPIED_MS = 1500;

// Small '#' that appears on hover: updates the URL to this section and copies it.
export const SectionAnchor = ({ sectionId }: { sectionId: string }) => {
  const { ui } = useContent();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), COPIED_MS);
    }).catch(() => undefined);
  };

  return (
    <a className="uw-anchor" href={`#${sectionId}`} onClick={copy} aria-label={ui.copyLink} title={ui.copyLink}>
      {copied ? '✓' : '#'}
    </a>
  );
};

'use client';

import type { SectionAnchorProps } from './SectionAnchor.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useCopyLink } from '@features/upcomingWave/hooks/useCopyLink';
import { paths } from '@routes/paths';

// Small '#' that appears on hover: updates the URL to this section and copies it.
export const SectionAnchor = ({ sectionId }: SectionAnchorProps) => {
  const { ui } = useContent();
  const { isCopied, copyLink } = useCopyLink(sectionId);

  return (
    <a className="uw-anchor" href={paths.section(sectionId)} onClick={copyLink} aria-label={ui.copyLink} title={ui.copyLink}>
      {isCopied ? '✓' : '#'}
    </a>
  );
};

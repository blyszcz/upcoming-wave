'use client';

import { useState } from 'react';

import { COPIED_FEEDBACK_MS } from '@/constants';
import { paths } from '@routes/paths';

export const useCopyLink = (sectionId: string) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}${paths.section(sectionId)}`;
    navigator.clipboard?.writeText(url)
      .then(() => {
        setIsCopied(true);
        window.setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);
      })
      .catch((error: unknown) => console.warn('Copying the section link failed', error));
  };

  return { isCopied, copyLink };
};

'use client';

import type { MouseEvent } from 'react';

import { LOCALE_STORAGE_KEY } from '@/constants';

// Remembers the explicit language choice (read by the redirect script) and keeps the current #section.
export const useLanguageSwitch = () => {
  const handleSwitch = (event: MouseEvent<HTMLAnchorElement>) => {
    const link = event.currentTarget;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, link.dataset.locale ?? '');
    } catch (error) {
      console.warn('Could not store the language choice', error);
    }
    link.href = `${link.getAttribute('href')?.split('#')[0] ?? ''}${window.location.hash}`;
  };

  return { handleSwitch };
};

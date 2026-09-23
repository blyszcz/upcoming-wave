'use client';

import type { MouseEvent } from 'react';

import { LOCALE_STORAGE_KEY } from '@/constants';

// Remembers the explicit language choice and keeps the current #section when switching.
export const useLanguageSwitch = (targetLocale: string, targetHref: string) => {
  const handleSwitch = (event: MouseEvent<HTMLAnchorElement>) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
    } catch (error) {
      console.warn('Could not store the language choice', error);
    }
    event.currentTarget.href = `${targetHref}${window.location.hash}`;
  };

  return { handleSwitch };
};

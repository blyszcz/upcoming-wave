'use client';

import { useEffect } from 'react';

const FACTS_SUFFIX = '-fakty';
const TOP_SECTION = 'start';

// Keeps the address bar in sync with the section in view, so a copied URL opens that section.
export const useSectionHash = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id.replace(FACTS_SUFFIX, '');
        const next = id === TOP_SECTION ? window.location.pathname : `#${id}`;
        if (next !== window.location.hash && !(id === TOP_SECTION && !window.location.hash)) {
          window.history.replaceState(null, '', next);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
};

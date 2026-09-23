'use client';

import { useEffect, useRef, useState } from 'react';

export const useElementWidth = <T extends HTMLElement>(initialWidth: number) => {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
};

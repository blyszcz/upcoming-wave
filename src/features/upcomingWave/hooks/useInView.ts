'use client';

import { useEffect, useRef, useState } from 'react';

export const useInView = <T extends Element>(threshold = 0.25, initiallyInView = false) => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(initiallyInView);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, isInView]);

  return { ref, isInView };
};

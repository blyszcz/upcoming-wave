'use client';

import { useEffect, useState } from 'react';

import { useReadingMode } from '@features/upcomingWave/context/ReadingModeContext';

// Open/closed state that follows the global reading mode but can be toggled locally.
export const useDisclosure = () => {
  const { isFull } = useReadingMode();
  const [isOpen, setIsOpen] = useState(isFull);

  useEffect(() => setIsOpen(isFull), [isFull]);

  return { isOpen, toggle: () => setIsOpen((current) => !current) };
};

'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import type { ReactNode } from 'react';

type ReadingMode = { isFull: boolean; toggle: () => void };

const ReadingModeContext = createContext<ReadingMode>({ isFull: false, toggle: () => undefined });

// Short version by default; "full version" expands every facts section at once.
export const ReadingModeProvider = ({ children }: { children: ReactNode }) => {
  const [isFull, setIsFull] = useState(false);
  const value = useMemo(() => ({ isFull, toggle: () => setIsFull((current) => !current) }), [isFull]);
  return <ReadingModeContext.Provider value={value}>{children}</ReadingModeContext.Provider>;
};

export const useReadingMode = () => useContext(ReadingModeContext);

'use client';

import { createContext, useContext } from 'react';

import type { Content } from './pl';
import type { ReactNode } from 'react';

const ContentContext = createContext<Content | null>(null);

export const ContentProvider = ({ content, children }: { content: Content; children: ReactNode }) => (
  <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
);

export const useContent = () => {
  const content = useContext(ContentContext);
  if (!content) throw new Error('useContent must be used inside ContentProvider');
  return content;
};

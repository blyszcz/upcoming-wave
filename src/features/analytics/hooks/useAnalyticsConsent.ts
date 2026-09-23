'use client';

import { useCallback, useEffect, useState } from 'react';

import { CONSENT_STORAGE_KEY } from '@/constants';
import { isAnalyticsConfigured, loadAnalytics } from '@features/analytics/utils/gtag';

type Consent = 'granted' | 'denied' | 'unknown';

const readConsent = (): Consent => {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : 'unknown';
  } catch {
    return 'unknown';
  }
};

// Remembers the cookie choice; analytics scripts load only after 'granted'.
export const useAnalyticsConsent = () => {
  const [consent, setConsent] = useState<Consent>('granted');
  const isEnabled = isAnalyticsConfigured();

  useEffect(() => {
    if (!isEnabled) return;
    const stored = readConsent();
    setConsent(stored);
    if (stored === 'granted') loadAnalytics();
  }, [isEnabled]);

  const choose = useCallback((choice: Exclude<Consent, 'unknown'>) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch (error) {
      console.warn('Could not store the cookie choice', error);
    }
    setConsent(choice);
    if (choice === 'granted') loadAnalytics();
  }, []);

  return { shouldAsk: isEnabled && consent === 'unknown', accept: () => choose('granted'), decline: () => choose('denied') };
};

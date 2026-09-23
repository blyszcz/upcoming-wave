'use client';

import type { AnalyticsConsentProps } from './AnalyticsConsent.types';

import { useAnalyticsConsent } from '@features/analytics/hooks/useAnalyticsConsent';

export const AnalyticsConsent = ({ text, accept, decline }: AnalyticsConsentProps) => {
  const { shouldAsk, accept: handleAccept, decline: handleDecline } = useAnalyticsConsent();
  if (!shouldAsk) return null;

  return (
    <div className="uw-consent" role="region" aria-label={text}>
      <p>{text}</p>
      <div className="uw-consent-actions">
        <button type="button" className="uw-text-button" onClick={handleDecline}>{decline}</button>
        <button type="button" className="uw-pill-button" onClick={handleAccept}>{accept}</button>
      </div>
    </div>
  );
};

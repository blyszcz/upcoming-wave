import { env } from '@/env';

type Gtag = (...args: unknown[]) => void;
type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag };

const GTAG_SRC = 'https://www.googletagmanager.com/gtag/js';

// Loads Google Analytics 4 only after the visitor agrees. IP anonymisation is on by default in GA4.
export const loadAnalytics = () => {
  const measurementId = env.NEXT_PUBLIC_GA_ID;
  const w = window as GtagWindow;
  if (!measurementId || w.gtag) return;

  w.dataLayer = w.dataLayer ?? [];
  w.gtag = (...args: unknown[]) => { w.dataLayer?.push(args); };
  w.gtag('js', new Date());
  w.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `${GTAG_SRC}?id=${measurementId}`;
  document.head.appendChild(script);
};

export const isAnalyticsConfigured = () => Boolean(env.NEXT_PUBLIC_GA_ID);

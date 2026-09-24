import { z } from 'zod';

// The only place that reads process.env. NEXT_PUBLIC_* values are inlined at build time,
// so each one has to be referenced explicitly.
const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://upcomingwave.org'),
  NEXT_PUBLIC_GA_ID: z.string().regex(/^G-[A-Z0-9]+$/).optional(),
});

export const env = schema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || undefined,
});

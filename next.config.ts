import type { NextConfig } from 'next';

// `*.dev.tsx` routes (the unpublished archive) exist only in `next dev`.
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: isDev ? ['dev.tsx', 'tsx', 'ts'] : ['tsx', 'ts'],
  trailingSlash: true,
  images: { unoptimized: true },
  // One bilingual 404 for both root layouts (src/app/global-not-found.tsx).
  experimental: { globalNotFound: true },
};

export default nextConfig;

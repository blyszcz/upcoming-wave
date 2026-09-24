import type { NextConfig } from 'next';

// `*.dev.tsx` routes (the unpublished archive) exist only in `next dev`.
const isDev = process.env.NODE_ENV === 'development';
// `npm run build:verify` builds into its own folder so it never breaks a running `next dev`.
const distDir = process.env.NEXT_DIST_DIR || '.next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir,
  pageExtensions: isDev ? ['dev.tsx', 'tsx', 'ts'] : ['tsx', 'ts'],
  trailingSlash: true,
  images: { unoptimized: true },
  // One bilingual 404 for both root layouts (src/app/global-not-found.tsx).
  experimental: { globalNotFound: true },
};

export default nextConfig;

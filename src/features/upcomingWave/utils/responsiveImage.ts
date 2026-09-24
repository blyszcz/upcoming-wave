import { imageWidths } from '@features/upcomingWave/content/imageWidths';

const SMALL_WIDTH = 640;

// Content refers to images as '/images/v2/name.jpg'; the files shipped are WebP in two widths.
export const responsiveImage = (src: string) => {
  const base = src.replace(/\.(jpe?g|png)$/, '');
  const width = imageWidths[src];
  if (!width) return { src };
  return { src: `${base}.webp`, srcSet: `${base}-${SMALL_WIDTH}.webp ${SMALL_WIDTH}w, ${base}.webp ${width}w` };
};

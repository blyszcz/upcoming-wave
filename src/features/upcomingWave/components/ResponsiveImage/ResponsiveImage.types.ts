import type { ImgHTMLAttributes } from 'react';

// `sizes` tells the browser how wide the image is drawn so it can pick the small or large file.
export type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & { src: string; alt: string; sizes: string };

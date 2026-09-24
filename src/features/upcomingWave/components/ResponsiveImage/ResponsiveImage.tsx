import type { ResponsiveImageProps } from './ResponsiveImage.types';

import { responsiveImage } from '@features/upcomingWave/utils/responsiveImage';

export const ResponsiveImage = ({ src, alt, sizes, ...rest }: ResponsiveImageProps) => {
  const image = responsiveImage(src);
  return <img {...rest} src={image.src} srcSet={image.srcSet} sizes={sizes} alt={alt} decoding="async" />;
};

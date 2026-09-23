import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Upcoming Wave',
    short_name: 'Upcoming Wave',
    description: 'Why the people building AI are asking for rules — explained simply, in pictures.',
    start_url: '/',
    display: 'browser',
    background_color: '#070b10',
    theme_color: '#070b10',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}

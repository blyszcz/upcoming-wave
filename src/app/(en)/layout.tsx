import type { Metadata, Viewport } from 'next';

import { fontVariables } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Why AI’s own creators are asking for rules',
  description: 'A visual story of how AI could change work, money and the state faster than we can adapt — and why the people building it are asking to be regulated.',
  alternates: { languages: { pl: '/pl/' } },
};

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';

import { fontVariables } from '@/app/fonts';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Dlaczego twórcy AI sami proszą o zasady',
  description: 'Wizualna opowieść o tym, jak AI może zmienić pracę, pieniądze i państwo szybciej, niż zdążymy się dostosować — i dlaczego jej twórcy proszą o regulacje.',
  alternates: { languages: { en: '/' } },
};

export const viewport: Viewport = { themeColor: '#070b10' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}

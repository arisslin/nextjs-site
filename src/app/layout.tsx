import './globals.css';
import { Metadata } from 'next';
import Navigation from '@/components/navigation';

type RootLayoutProps = { children: React.ReactNode };

export const metadata: Metadata = {
  title: {
    template: '%s | Next MDX Test',
    default: 'Next MDX Test',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

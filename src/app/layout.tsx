import './globals.css';
import Link from 'next/link';
import { Metadata } from 'next';

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

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/mdx-example'>Next MDX example</Link>
      </li>
    </ul>
  </nav>
);

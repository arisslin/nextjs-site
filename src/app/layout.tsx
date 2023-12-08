import './globals.css';
import Link from 'next/link';

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main>
          <h1>{'Title'}</h1>
          {children}
        </main>
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
        <Link href='/my-mdx-page'>My MDX Page</Link>
      </li>
      <li>
        <a href='#'>Legal</a>
      </li>
      <li>
        <a href='#'>Privacy</a>
      </li>
    </ul>
  </nav>
);

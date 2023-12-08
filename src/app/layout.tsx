import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
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
        <main>
          <h1>{'Title'}</h1>
          {children}
        </main>
      </body>
    </html>
  );
}

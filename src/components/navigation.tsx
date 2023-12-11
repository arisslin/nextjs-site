import Link from 'next/link';
import { promises as fs } from 'fs';

export default async function Navigation() {
  const routes = await getRoutes();

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/mdx-example'>Next MDX example</Link>
        </li>
        {routes.map((route) => {
          return (
            <li key={route}>
              <Link href={`/${route}`}>{route}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

async function getRoutes(): Promise<string[]> {
  try {
    const mdxFiles = await fs.readdir(process.cwd() + '/legalpages');
    return mdxFiles.map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error(error);
    throw new Error('Could not find legalpages directory');
  }
}

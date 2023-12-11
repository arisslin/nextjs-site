import Link from 'next/link';
import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from '@/app/[slug]/page';

export default async function Navigation() {
  const links = await getNavlinks();

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/mdx-example'>Next MDX example</Link>
        </li>
        {links.map((link) => {
          return (
            <li key={link.path}>
              <Link href={`/${link.path}`}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type NavLink = {
  path: string;
  title: string;
};
async function getNavlinks(): Promise<NavLink[]> {
  try {
    const filenames = await fs.readdir(process.cwd() + '/legalpages');

    return await Promise.all(
      filenames.map(async (filename) => {
        try {
          const file = await getFile(filename);
          const { frontmatter } = await compileMDX<Frontmatter>({
            source: file,
            options: { parseFrontmatter: true },
          });

          return {
            path: filename.replace(/\.mdx$/, ''),
            title: frontmatter.title,
          };
        } catch (error) {
          console.log(error);
          throw new Error('Could not create Navigation links');
        }
      })
    );
  } catch (error) {
    console.error(error);
    throw new Error('Could not find legalpages directory');
  }
}

async function getFile(filename: string): Promise<string> {
  const path = process.cwd() + `/legalpages/${filename}`;
  try {
    return fs.readFile(path, 'utf-8');
  } catch (error) {
    console.log(error);
    throw new Error(`Could not find file ${path}`);
  }
}

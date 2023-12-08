import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
};

export default async function RemoteMdxPage() {
  const file = await fs.readFile(
    process.cwd() + '/legalpages/legal.mdx',
    'utf-8'
  );

  if (!file) {
    return null;
  }

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: file,
    options: { parseFrontmatter: true },
  });
  const date = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString('de-DE')
    : undefined;

  return (
    <>
      {frontmatter.title ? <h1>{frontmatter.title}</h1> : null}
      {date ? <p>created: {date}</p> : null}
      {content}
    </>
  );
}

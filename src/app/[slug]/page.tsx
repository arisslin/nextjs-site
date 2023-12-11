import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import Homelink from '@/components/homelink';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug: string };
};

export type Frontmatter = {
  title: string;
};

export default async function Page({ params }: PageProps) {
  try {
    const file = await fs.readFile(
      process.cwd() + `/legalpages/${params.slug}.mdx`,
      'utf-8'
    );

    if (!file) {
      console.error('File not found');
      notFound();
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: file,
      options: { parseFrontmatter: true },
    });

    return (
      <>
        <h1>{frontmatter.title}</h1>
        {content}
        <Homelink />
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}

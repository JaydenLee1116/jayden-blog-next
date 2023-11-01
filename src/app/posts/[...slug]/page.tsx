import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Markdown from '@/components/Markdown';

export const generateStaticParams = async () => {
  return allPosts.map(post => ({ slug: post._raw.flattenedPath.split('/') }));
};

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug.join('/'));
  if (!post) {
    console.error(`Post not found for slug: ${params.slug.join('/')}`);
    notFound();
  }
  return { title: post.title };
};

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug.join('/'));
  if (!post) {
    console.error(`Post not found for slug: ${params.slug.join('/')}`);
    notFound();
  }

  return (
    <article className="mx-auto w-[1000px] py-8">
      <div className="mb-8 w-full text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-jayden-0">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Markdown>{post.body.raw}</Markdown>
    </article>
  );
}

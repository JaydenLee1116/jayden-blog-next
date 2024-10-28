import { format, parseISO } from 'date-fns';
import { allLogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Markdown from '@/components/Markdown';
import Comment from '@/components/Comment';
import { ContentPath } from '@/enums';

export const generateStaticParams = async () => {
  return allLogs.map(log => ({ slug: log._raw.flattenedPath.split('/') }));
};

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const log = allLogs.find(
    log => log._raw.flattenedPath === ContentPath.Logs + params.slug.join('/'),
  );
  if (!log) {
    console.error(`Log not found for slug: ${params.slug.join('/')}`);
    notFound();
  }
  return { title: log.title };
};

export default function LogPage({ params }: { params: { slug: string[] } }) {
  const log = allLogs.find(
    log => log._raw.flattenedPath === ContentPath.Logs + params.slug.join('/'),
  );
  if (!log) {
    console.error(`Log not found for slug: ${params.slug.join('/')}`);
    notFound();
  }

  return (
    <article className="mx-auto mt-2 w-full rounded-2xl border-2 border-dashed border-slate-700 px-8 py-8 dark:border-slate-100 sm:px-20">
      <div className="mb-8 w-full text-center">
        <time dateTime={log.date} className="mb-1 text-xs">
          {format(parseISO(log.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{log.title}</h1>
      </div>
      <Markdown>{log.body.raw}</Markdown>
      <Comment />
    </article>
  );
}

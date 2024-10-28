import { type Log, type Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import ContentCard from './ContentCard';

type Props = {
  query: string;
  allContent: Log[] | Post[];
};

export default function ContentCards({ query, allContent }: Props) {
  const sortedContentsByDate = allContent.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const filteredContents = sortedContentsByDate.filter(
    content =>
      content.title.toLowerCase().includes(query.toLowerCase()) ||
      content.body.raw.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {filteredContents.length ? (
        <ul className="grid grid-cols-1 place-content-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredContents.map(content => (
            <ContentCard key={content._id} {...content} />
          ))}
        </ul>
      ) : (
        <div className="text-center text-xl text-slate-700 dark:text-slate-100 sm:text-4xl">
          검색 결과가 없어요!
        </div>
      )}
    </>
  );
}

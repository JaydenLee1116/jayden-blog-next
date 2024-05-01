import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import PostCard from './PostCard';

type Props = {
  query: string;
};

export default function PostCards({ query }: Props) {
  const sortedPostsByDate = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const filteredPosts = sortedPostsByDate.filter(
    post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.raw.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {filteredPosts.length ? (
        <ul className="grid grid-cols-1 place-content-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredPosts.map(post => (
            <PostCard key={post._id} {...post} />
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

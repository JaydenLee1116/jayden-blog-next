import { Post } from 'contentlayer/generated';

import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostCards({ posts }: Props) {
  return (
    <>
      {posts.length ? (
        <ul className="grid grid-cols-1 place-content-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map(post => (
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

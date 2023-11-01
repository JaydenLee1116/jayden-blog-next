import { Post } from 'contentlayer/generated';

import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostCards({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 place-content-between gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map(post => (
        <PostCard key={post._id} {...post} />
      ))}
    </ul>
  );
}

import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import PostCards from '@/components/PostCards';

export default function PostsPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <section className="min-h-full px-10 pt-10">
      <PostCards posts={posts} />
    </section>
  );
}

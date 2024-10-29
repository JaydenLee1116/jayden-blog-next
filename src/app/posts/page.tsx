import ContentCards from 'src/components/ContentCards';
import SearchBar from '@/components/SearchBar';
import { allPosts } from 'contentlayer/generated';

type Props = {
  searchParams: {
    query: string;
  };
};

export default function PostsPage({ searchParams }: Props) {
  return (
    <section className="flex min-h-full flex-col gap-y-4 px-10">
      <SearchBar />
      <ContentCards query={searchParams.query ?? ''} allContent={allPosts ?? []} />
    </section>
  );
}

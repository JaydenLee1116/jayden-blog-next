import PostCards from '@/components/PostCards';
import SearchBar from '@/components/SearchBar';

type Props = {
  searchParams: {
    query: string;
  };
};

export default function PostsPage({ searchParams }: Props) {
  return (
    <section className="flex min-h-full flex-col gap-y-4 px-10">
      <SearchBar />
      <PostCards query={searchParams.query ?? ''} />
    </section>
  );
}

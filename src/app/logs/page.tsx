import PostCards from 'src/components/ContentCards';
import SearchBar from '@/components/SearchBar';
import { allLogs } from 'contentlayer/generated';

type Props = {
  searchParams: {
    query: string;
  };
};

export default function LogsPage({ searchParams }: Props) {
  return (
    <section className="flex min-h-full flex-col gap-y-4 px-10">
      <SearchBar />
      <PostCards query={searchParams.query ?? ''} allContent={allLogs ?? []} />
    </section>
  );
}

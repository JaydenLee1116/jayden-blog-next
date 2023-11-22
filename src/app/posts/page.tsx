'use client';

import { useCallback, useEffect, useState } from 'react';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { debounce } from 'lodash';

import PostCards from '@/components/PostCards';
import SearchBar from '@/components/\bSearchBar';

export default function PostsPage() {
  const initialPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const [searchValue, setSearchValue] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const updateFilteredPosts = useCallback(
    debounce(search => {
      const filtered = initialPosts.filter(
        post =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.raw.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }, 300),
    [initialPosts],
  );

  useEffect(() => {
    updateFilteredPosts(searchValue);
  }, [searchValue, updateFilteredPosts]);

  return (
    <section className="flex min-h-full flex-col gap-y-4 px-10 pt-10">
      <SearchBar value={searchValue} onChange={changeSearchValue} />
      <PostCards posts={filteredPosts} />
    </section>
  );
}

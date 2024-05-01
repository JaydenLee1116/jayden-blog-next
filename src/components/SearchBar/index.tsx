'use client';

import { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { debounce } from 'lodash';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (e.target.value) {
        params.set('query', e.target.value);
      } else {
        params.delete('query');
      }
      router.replace(`${pathname}?${params.toString()}`);
    }, 300),
    [],
  );

  return (
    <input
      type="text"
      defaultValue={searchParams.get('query')?.toString()}
      onChange={handleChange}
      placeholder="검색어를 입력해주세요!"
      className="sticky top-20 z-10 h-10 w-full rounded-lg border border-slate-800 bg-white pl-2 text-xl dark:border-white dark:bg-slate-800 sm:h-20 sm:border-2 sm:pl-4 sm:text-4xl"
    />
  );
}

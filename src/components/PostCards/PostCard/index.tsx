import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import Chips from '@/components/Chips';

const defaultThumbnail = '/images/thumbnails/default.png';

export default function PostCard(post: Post) {
  const categoryList = post.categories.split(' ');

  return (
    <li className="list-none rounded-lg border border-slate-700 p-2 hover:border-jayden-0 dark:border-slate-100 dark:hover:border-jayden-0">
      <Link href={post.url} className="group flex h-full flex-col justify-center">
        <Image
          className="p-8"
          src={post.thumbnail || defaultThumbnail}
          alt={post.title}
          width={500}
          height={500}
        />
        <h2 className="mb-1 truncate text-xl group-hover:text-jayden-0">{post.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-1">
            {categoryList && <Chips contentList={categoryList} />}
          </div>
          <time dateTime={post.date} className="text-xs">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
      </Link>
    </li>
  );
}

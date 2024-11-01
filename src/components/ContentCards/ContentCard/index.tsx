import { Log, Post } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

import Chips from '@/components/Chips';

const defaultThumbnail = '/images/thumbnails/default.png';

export default function ContentCard(content: Log | Post) {
  const categoryList = content.categories.split(' ');

  return (
    <li className="list-none rounded-lg border border-slate-700 hover:border-jayden-0 dark:border-slate-100 dark:hover:border-jayden-0">
      <Link href={content.url} className="group flex h-full flex-col justify-center p-2">
        <Image
          className="p-8"
          src={content.thumbnail || defaultThumbnail}
          alt={content.title}
          width={500}
          height={500}
        />
        <h2 className="mb-1 truncate text-xl group-hover:text-jayden-0">{content.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-1">
            {categoryList && <Chips contentList={categoryList} />}
          </div>
          <time dateTime={content.date} className="text-xs">
            {format(parseISO(content.date), 'LLLL d, yyyy')}
          </time>
        </div>
      </Link>
    </li>
  );
}

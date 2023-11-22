import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitcher from '../ThemeSwitcher';

const pages = [
  {
    name: 'posts',
    href: '/posts',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'resume',
    href: '/resume',
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-20 flex-col items-center justify-between bg-slate-100 bg-opacity-10 backdrop-blur-sm dark:bg-slate-700 dark:bg-opacity-10 sm:flex-row">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/favicon.png" width="36" height="36" alt="favicon" priority />
        <h1 className="truncate whitespace-nowrap text-2xl font-bold text-jayden-0 sm:text-3xl">
          {'Jayden { do: smite }'}
        </h1>
      </Link>
      <div className="flex gap-8">
        <nav className="flex justify-between gap-6">
          {pages.map(page => (
            <Link href={page.href} key={page.href}>
              <span className="text-xl font-bold sm:text-2xl">{page.name}</span>
            </Link>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

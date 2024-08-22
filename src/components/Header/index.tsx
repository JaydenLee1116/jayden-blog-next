import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitcher from '../ThemeSwitcher';
import ProgressBar from '../ProgressBar';

const pages = [
  {
    name: 'posts',
    href: '/posts',
  },
  {
    name: 'resume',
    href: '/resume',
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-fit flex-col justify-around">
      <div className="flex h-20 flex-col items-center justify-center bg-slate-100 bg-opacity-10 backdrop-blur-sm dark:bg-slate-700 dark:bg-opacity-10 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70">
          <Image src="/images/favicon.png" width="36" height="36" alt="favicon" priority />
          <h1 className="truncate whitespace-nowrap text-2xl font-bold text-jayden-0 sm:text-3xl">
            {'Jayden { do: smite }'}
          </h1>
        </Link>
        <div className="flex gap-8">
          <nav className="flex justify-between gap-6">
            {pages.map(page => (
              <Link href={page.href} key={page.href}>
                <span className="text-xl font-bold hover:opacity-70 sm:text-2xl">{page.name}</span>
              </Link>
            ))}
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
      <ProgressBar />
    </header>
  );
}

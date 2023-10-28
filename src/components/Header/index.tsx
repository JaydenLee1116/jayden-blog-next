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
    <header className="sticky top-0 flex items-center justify-between">
      <Link href="/" className="flex gap-2">
        <Image src="/images/favicon.png" width="36" height="36" alt="favicon" priority />
        <h1 className="text-jayden-0 text-3xl font-bold">{'Jayden { do: smite }'}</h1>
      </Link>
      <div className="flex gap-8">
        <nav className="flex justify-between gap-6">
          {pages.map(page => (
            <Link href={page.href} key={page.href}>
              <span className="text-2xl font-bold">{page.name}</span>
            </Link>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

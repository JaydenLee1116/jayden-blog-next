'use client';

import { useReadingProgress } from '@/hooks/useReadingProgress';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const completion = useReadingProgress();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome || (
        <span
          style={{
            transform: `translateX(${completion - 104}%)`,
          }}
          className="absolute bottom-0 h-1 w-screen bg-jayden-0 transition-transform duration-150"
        />
      )}
    </>
  );
}

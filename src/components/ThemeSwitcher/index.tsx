'use client';

import { useState } from 'react';
import { TbBulb, TbBulbOff } from 'react-icons/tb';

export default function ThemeSwitcher() {
  let htmlEl: HTMLElement;
  if (typeof window !== 'undefined') {
    htmlEl = document.querySelector('html') as HTMLElement;
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      htmlEl.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className="hover:opacity-70">
      {isDarkMode ? (
        <TbBulbOff size="24" className="stroke-slate-100" />
      ) : (
        <TbBulb size="24" className="stroke-slate-700" />
      )}
    </button>
  );
}

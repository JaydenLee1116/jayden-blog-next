'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function ScrollBackToTopButton() {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const checkIsScrollTop = useCallback(() => {
    if (window.scrollY > 200) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIsScrollTop);
    return () => window.removeEventListener('scroll', checkIsScrollTop);
  }, [checkIsScrollTop]);

  return (
    <>
      {isScrollTop || (
        <button
          className="fixed bottom-[6%] right-[2.5%] rounded-full bg-jayden-0 p-4 text-sm font-medium uppercase leading-tight text-slate-700 shadow-md transition duration-150 ease-in-out hover:shadow-lg active:bg-slate-700 active:shadow-lg dark:text-slate-100 dark:active:bg-slate-100"
          onClick={scrollTop}
        >
          TOP
        </button>
      )}
    </>
  );
}

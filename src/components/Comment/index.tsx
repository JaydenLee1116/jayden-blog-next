'use client';
import { useEffect, useRef } from 'react';

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';
    scriptEl.setAttribute('data-repo', process.env.NEXT_PUBLIC_GISCUS_REPO as string);
    scriptEl.setAttribute('data-repo-id', process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string);
    scriptEl.setAttribute('data-category', 'Announcements');
    scriptEl.setAttribute('data-category-id', process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID as string);
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'bottom');
    scriptEl.setAttribute('data-theme', 'noborder_light');
    scriptEl.setAttribute('data-lang', 'en');
    scriptEl.setAttribute('crossorigin', 'anonymous');

    ref.current.appendChild(scriptEl);
  }, []);

  return <section ref={ref} />;
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollBackToTopButton from '@/components/BackToTopButton';

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: "Jayden's Blog {do: smite}",
  description: 'Jayden의 블로그입니다.',
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.className} no-scrollbar`}>
      <body className="mx-auto flex h-fit min-h-screen w-full flex-col justify-between bg-slate-100 px-[4%] text-slate-700 dark:bg-slate-700 dark:text-slate-100">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <ScrollBackToTopButton />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}

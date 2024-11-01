import Image from 'next/image';
import Link from 'next/link';

import PingCircle from '../PingCircle';

export default function Introduction() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10">
      <Image
        src="/images/profile.png"
        width={300}
        height={300}
        alt="my-profile"
        className="rounded-2xl"
        priority
      />
      <section className="flex flex-col items-center gap-6 text-lg">
        <p className="text-3xl">
          안녕하세요! <span className="animate-pulse font-bold">프론트엔드 엔지니어 이재호</span>
          입니다.
        </p>
        <p>
          <span className="font-bold">유저의 필요에 맞는 제품을 개발</span>하는 것에 관심이
          많습니다.
        </p>
        <p>
          내 옆의 <span className="font-bold">동료도 편하게 읽을 수 있는 코드</span>가 좋은 코드라고
          생각합니다.
        </p>
        <p>
          <span className="font-bold">빠르게 개발하고 시행착오를 겪으며 성장</span>하는 애자일한
          방법을 선호합니다.
        </p>
      </section>
      <section className="flex flex-col items-center sm:flex-row sm:gap-4">
        <Link
          href="https://github.com/JaydenLee1116"
          className="flex gap-1 font-semibold underline hover:text-jayden-0"
          target="_blank"
        >
          Github
          <PingCircle status="ing" />
        </Link>
        <Link
          href="https://linkedin.com/in/jaydenlee1116"
          className="flex gap-1 font-semibold underline hover:text-jayden-0"
          target="_blank"
        >
          LinkedIn
          <PingCircle status="ing" />
        </Link>
        <Link
          href="mailto:jaydenlee.dev@gmail.com"
          className="flex gap-1 font-semibold underline hover:text-jayden-0"
          target="_blank"
        >
          jaydenlee.dev@gmail.com
          <PingCircle status="ing" />
        </Link>
      </section>
    </section>
  );
}

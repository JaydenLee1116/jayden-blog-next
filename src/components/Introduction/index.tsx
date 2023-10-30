import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10">
      <Image
        src="/images/profile.png"
        width={360}
        height={360}
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
      <section className="flex gap-4">
        <div className="flex gap-1 font-semibold">
          이메일: jayden.dev@gmail.com
          <span className="relative flex h-2 w-2">
            <span className="bg-jayden-0 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-jayden-0 relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
        </div>
        <Link
          href="https://github.com/JaydenLee1116"
          className="hover:text-jayden-0 flex gap-1 font-semibold"
        >
          깃허브
          <span className="relative flex h-2 w-2">
            <span className="bg-jayden-0 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-jayden-0 relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
        </Link>
        <Link
          href="https://linkedin.com/in/jaeho-jayden-‍lee-a0a902216"
          className="hover:text-jayden-0 flex gap-1 font-semibold"
        >
          링크드인
          <span className="relative flex h-2 w-2">
            <span className="bg-jayden-0 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-jayden-0 relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
        </Link>
      </section>
    </section>
  );
}

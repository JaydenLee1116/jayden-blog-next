import PingCircle from '@/components/PingCircle';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center gap-y-4 px-10 py-10">
      <h1 className="text-3xl font-medium">열심히 Resume 페이지를 만들고 있어요!</h1>
      <p className="text-2xl font-medium">현재는 아래의 노션 링크로 이력서를 확인해주세요!</p>
      <Link
        href="https://resume-jayden.notion.site/bc09960d516b4b2fbee4927692ae1096?pvs=4"
        className="flex gap-1 text-3xl font-bold hover:text-jayden-0"
        target="_blank"
      >
        Resume by notion
        <PingCircle status="ing" />
      </Link>
    </section>
  );
}

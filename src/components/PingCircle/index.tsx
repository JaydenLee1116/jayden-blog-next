type Props = {
  status: 'ing' | 'done';
};

export default function PingCircle({ status = 'ing' }: Props) {
  if (status === 'done') {
    return (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-slate-700 opacity-75 dark:bg-slate-100"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-700 dark:bg-slate-100"></span>
      </span>
    );
  }

  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jayden-0 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-jayden-0"></span>
    </span>
  );
}

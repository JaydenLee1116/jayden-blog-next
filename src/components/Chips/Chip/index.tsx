type Props = {
  content: string;
  hasColor?: boolean;
};

export default function Chip({ content, hasColor }: Props) {
  const colorsClassName = hasColor
    ? 'bg-jayden-0 dark:text-slate-700'
    : 'bg-slate-200 dark:bg-slate-500';
  return (
    <li className={`rounded-full px-2 py-1 text-xs font-bold ${colorsClassName} whitespace-nowrap`}>
      {content}
    </li>
  );
}

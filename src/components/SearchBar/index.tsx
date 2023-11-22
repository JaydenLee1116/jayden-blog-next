type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="검색어를 입력해주세요!"
      className="sticky top-20 z-10 h-10 w-full rounded-lg border border-slate-800 bg-white pl-2 text-xl dark:border-white dark:bg-slate-800 sm:h-20 sm:border-2 sm:pl-4 sm:text-4xl"
    />
  );
}

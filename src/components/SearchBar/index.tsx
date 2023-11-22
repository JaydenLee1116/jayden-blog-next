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
      placeholder="검색어를 입력해주세요 :)"
      className="sticky top-9 z-10 h-20 w-full rounded-lg border-2 border-slate-800 bg-white pl-4 text-4xl dark:border-white dark:bg-slate-800"
    />
  );
}

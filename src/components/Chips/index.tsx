import Chip from './Chip';

type Props = {
  contentList: string[];
  hasColor?: boolean;
};

export default function Chips({ contentList, hasColor }: Props) {
  return (
    <ul className="flex flex-wrap gap-1">
      {contentList.map(content => (
        <Chip key={content} content={content} hasColor={hasColor} />
      ))}
    </ul>
  );
}

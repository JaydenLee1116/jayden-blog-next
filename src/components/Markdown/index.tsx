'use client';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

type Props = {
  children: string;
};

export default function Markdown({ children }: Props) {
  const markdownClassName = {
    headings: 'prose-headings:text-slate-700 dark:prose-headings:text-slate-100',
    code: 'prose-code:text-inflearn-0',
    blockquote: 'prose-blockquote:text-jayden-0',
    a: 'prose-a:text-black-0 dark:prose-a:text-white prose-a:underline',
    pre: 'prose-pre:w-full prose-pre:overflow-x-auto prose-pre:border prose-pre:border-slate-700 dark:prose-pre:border-slate-100 prose-pre:rounded prose-pre:my-4 prose-pre:py-2 prose-pre:px-4 prose-pre:shadow',
  };

  // TODO: prose-base, sm, lg, xl 등 사용하여 글 축소 및 확대 기능 고려해보기
  return (
    <ReactMarkdown
      className={`prose-base w-full text-slate-700 dark:text-slate-100 ${markdownClassName.headings} ${markdownClassName.code} ${markdownClassName.blockquote} ${markdownClassName.a} ${markdownClassName.pre}`}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" style={materialDark}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
        p: paragraph => {
          const { node }: any = paragraph;
          const { tagName } = node?.children[0];

          if (tagName === 'img') {
            const image = node.children[0];
            console.log(node?.children[0]);

            return (
              <Image
                src={image.properties.src}
                width={500}
                height={500}
                alt={image.properties.alt}
              />
            );
          }
          return <p>{paragraph.children}</p>;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

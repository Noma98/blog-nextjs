'use client';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
  data: string;
};
function MarkdownContent({ data }: Props) {
  return (
    <Markdown
      className='prose lg:prose-xl max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ children, className, node, ...rest }: any) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag='div'
              language={match[1]}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-60 object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {data}
    </Markdown>
  );
}

export default MarkdownContent;

'use client';
import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  data: string;
};
function MarkdownContent({ data }: Props) {
  return (
    <Markdown
      className='prose'
      components={{
        code({ children, className, node, ...rest }: any) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag='div'
              language={match[1]}
              style={dark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {data}
    </Markdown>
  );
}

export default MarkdownContent;

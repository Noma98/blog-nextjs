import React from 'react';
import MarkdownContent from '@/components/MarkdownContent';
import { PostData } from '@/service/posts';

type Props = {
  post: PostData;
};
function PostContent({ post }: Props) {
  const { title, description, date, content } = post;

  return (
    <section className='bg-gray-50 relative p-8'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-sm after:w-1/6 after:h-0.5 after:my-3 after:bg-blue-500 after:block'>
        {description}
      </p>
      <span className='absolute top-2 right-4 text-xs text-gray-500'>
        {date}
      </span>
      <MarkdownContent data={content} />
    </section>
  );
}

export default PostContent;

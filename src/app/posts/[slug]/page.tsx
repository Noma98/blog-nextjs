import React from 'react';
import path from 'path';
import { promises as fs } from 'fs';
import Image from '../../../../node_modules/next/image';

import MarkdownContent from '@/components/MarkdownContent';
import { getPostDetail, getPosts } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params }: Props) {
  const {
    title,
    date,
    description,
    path: dataPath,
  } = await getPostDetail(params.slug);
  const filePath = path.join(process.cwd(), 'data', `${dataPath}.md`);
  const mdStr = await fs.readFile(filePath, 'utf-8');

  return (
    <div className='px-10'>
      <Image
        src={`/images/home/${dataPath}.png`}
        width={2720}
        height={320}
        alt='post_banner'
        objectFit='contain'
        className='rounded-t-xl object-cover w-full h-40'
      />
      <div className='bg-gray-50 p-4 relative rounded-b-xl mb-8'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-sm after:w-1/6 after:h-0.5 after:my-3 after:bg-blue-500 after:block'>
          {description}
        </p>
        <span className='absolute top-2 right-4 text-xs text-gray-500'>
          {date}
        </span>
        <MarkdownContent data={mdStr} />
      </div>
    </div>
  );
}
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
export default Post;
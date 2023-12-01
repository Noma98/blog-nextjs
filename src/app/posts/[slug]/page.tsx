import React from 'react';
import Image from 'next/image';
import path from 'path';
import { promises as fs } from 'fs';

import MarkdownContent from '@/components/MarkdownContent';
import PostNavigator from '@/components/PostNavigator';
import { getPostDetail, getPosts } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params }: Props) {
  const currentPost = await getPostDetail(params.slug);
  const { title, date, description, path: dataPath } = currentPost;

  const postArr = await getPosts();
  const currentIdx = postArr.findIndex((v) => v.title === title);
  const filePath = path.join(process.cwd(), 'data/posts', `${dataPath}.md`);
  const mdStr = await fs.readFile(filePath, 'utf-8');

  return (
    <article className='px-10'>
      <Image
        src={`/images/posts/${dataPath}.png`}
        width={2720}
        height={320}
        alt='post_banner'
        objectFit='contain'
        className='rounded-t-xl object-cover w-full h-40'
      />
      <div className='bg-gray-50 relative p-8'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-sm after:w-1/6 after:h-0.5 after:my-3 after:bg-blue-500 after:block'>
          {description}
        </p>
        <span className='absolute top-2 right-4 text-xs text-gray-500'>
          {date}
        </span>
        <MarkdownContent data={mdStr} />
      </div>
      <PostNavigator postArr={postArr} currentIdx={currentIdx} />
    </article>
  );
}
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
export default Post;

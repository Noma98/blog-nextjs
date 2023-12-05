import React from 'react';
import Image from 'next/image';

import PostNavigator from '@/components/PostNavigator';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { path, title, prev, next } = post;

  return (
    <article className='px-10 pb-10'>
      <Image
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
        objectFit='contain'
        className='rounded-t-xl object-cover w-full h-[200px]'
      />
      <PostContent post={post} />
      <PostNavigator prev={prev} next={next} />
    </article>
  );
}
export default Post;

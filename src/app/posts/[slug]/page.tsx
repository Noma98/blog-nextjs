import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import PostNavigator from '@/components/PostNavigator';
import PostContent from '@/components/PostContent';
import { getFeatuerdPosts, getPostData } from '@/service/posts';

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

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
    openGraph: {
      images: [`/images/posts/${slug}.png`],
    },
  };
}
//feactured 포스팅만 정적으로 미리 만들어 놓고 싶다면 아래처럼 gernerateStaticParams를 사용해 정의해주면 됨.
export async function generateStaticParams() {
  const posts = await getFeatuerdPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
export default Post;

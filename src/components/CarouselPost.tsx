'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Post } from '@/service/posts';

type Props = {
  posts: Post[];
};
function CarouselPost({ posts }: Props) {
  const router = useRouter();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
      centerMode
      className='mb-10 min-h-100 p-4'
    >
      {posts.map((post, idx) => (
        <button
          onClick={() => router.push(`/posts/${post.path}`)}
          key={idx}
          className='flex flex-col items-center shadow-md shadow-slate-300 rounded p-4 mr-4 h-full hover:opacity-80'
        >
          <Image
            src={`/images/home/${post.path}.png`}
            alt='post_thumbnail'
            width={300}
            height={200}
            className='w-full'
          />
          <span className='text-xs align-bottom mt-2 ml-auto mr-2 text-gray-400'>
            {post.date}
          </span>
          <h3 className='font-semibold mt-2 font-sm'>{post.title}</h3>
          <p className='text-sm'>{post.description}</p>
          <span className='rounded-md px-2 py-1 text-xs mt-4 bg-yellow-200'>
            {post.category}
          </span>
        </button>
      ))}
    </Carousel>
  );
}

export default CarouselPost;

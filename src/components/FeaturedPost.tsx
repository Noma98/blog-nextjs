'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  idx: number;
  path: string;
  date: string;
  title: string;
  description: string;
  category: string;
};
function FeaturedPost({
  idx,
  path,
  date,
  title,
  description,
  category,
}: Props) {
  const router = useRouter();

  return (
    <button
      key={idx}
      onClick={() => router.push(`/posts/${path}`)}
      className='flex flex-col items-center shadow-md shadow-slate-200 rounded p-4 hover:opacity-80'
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt='post_thumbnail'
        width={400}
        height={300}
        className='w-full z-0'
      />
      <span className='text-xs align-bottom mt-2 ml-auto mr-2 text-gray-400'>
        {date}
      </span>
      <h3 className='font-semibold mt-2'>{title}</h3>
      <p className='text-sm'>{description}</p>
      <span className='rounded-md px-2 py-1 text-xs mt-4 bg-opacity-30 bg-blue-400 '>
        {category}
      </span>
    </button>
  );
}

export default FeaturedPost;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Post } from '@/service/posts';

type Props = { post: Post };

function PostCard({
  post: { category, date, description, path, title },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='flex flex-col items-center shadow-md shadow-slate-200 rounded p-4 hover:opacity-80 overflow-hidden'>
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={400}
          height={300}
          className='w-full z-0'
        />
        <time className='text-xs self-end mt-2 mr-2 text-gray-400'>{date}</time>
        <h3 className='font-semibold mt-2'>{title}</h3>
        <p className='w-full text-sm truncate text-center'>{description}</p>
        <span className='rounded-md px-2 py-1 text-xs mt-4 bg-opacity-30 bg-blue-400 '>
          {category}
        </span>
      </article>
    </Link>
  );
}

export default PostCard;

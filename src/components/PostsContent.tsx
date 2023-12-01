'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Post } from '@/service/posts';

type Filter = 'all posts' | 'my story' | 'frontend' | 'backend' | 'javascript';
type Props = {
  posts: Post[];
};
function PostsContent({ posts }: Props) {
  const [filter, setFilter] = useState<Filter>('all posts');
  const router = useRouter();

  const onClickCategory: React.MouseEventHandler<HTMLUListElement> = (e) => {
    setFilter((e.target as HTMLElement).textContent as Filter);
  };
  const onClickPost = (path: string) => {
    router.push(`/posts/${path}`);
  };
  return (
    <div className='flex flex-col-reverse sm:flex-row'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-3 sm:basis-3/4'>
        {posts
          .filter((v) => filter === 'all posts' || filter === v.category)
          .map(({ path, date, title, description, category }, idx) => (
            <div
              key={idx}
              className='flex flex-col max-h-50 items-center shadow-md shadow-slate-200 rounded p-4 m cursor-pointer hover:-translate-y-1'
              onClick={() => onClickPost(path)}
            >
              <Image
                src={`/images/posts/${path}.png`}
                alt='post_thumbnail'
                width={400}
                height={300}
                className='w-full'
              />
              <span className='text-xs align-bottom mt-2 ml-auto mr-2 text-gray-400'>
                {date}
              </span>
              <h3 className='font-semibold mt-2'>{title}</h3>
              <p className='text-sm'>{description}</p>
              <span className='rounded-md px-2 py-1 text-xs mt-4 bg-opacity-30 bg-blue-400 '>
                {category}
              </span>
            </div>
          ))}
      </div>
      <nav className='sm:py-8 pb-4 sm:basis-1/4'>
        <div className='sm:w-20 sm:pl-0 pl-4 mx-auto'>
          <h3 className='text-l underline underline-offset-4 pb-3 decoration-blue-500 font-bold'>
            Category
          </h3>
          <ul
            onClick={onClickCategory}
            className='cursor-pointer flex sm:block'
          >
            <li className='hover:text-blue-400 px-2 ph-1'>all posts</li>
            <li className='hover:text-blue-400 px-2 ph-1'>my story</li>
            <li className='hover:text-blue-400 px-2 ph-1'>frontend</li>
            <li className='hover:text-blue-400 px-2 ph-1'>backend</li>
            <li className='hover:text-blue-400 px-2 ph-1'>javascript</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PostsContent;

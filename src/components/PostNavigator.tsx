'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Post } from '@/service/posts';

type Props = {
  postArr: Post[];
  currentIdx: number;
};
function PostNavigator({ postArr, currentIdx }: Props) {
  const router = useRouter();

  const onClickLeft = () => {
    if (currentIdx === 0) return;
    router.push(`/posts/${postArr[currentIdx - 1].path}`);
  };
  const onClickRight = () => {
    if (currentIdx === postArr.length - 1) return;
    router.push(`/posts/${postArr[currentIdx + 1].path}`);
  };

  return (
    <div className='relative mb-8'>
      <div className='flex flex-col md:flex-row w-full'>
        <Image
          alt='post_thumbnail'
          src={`/images/home/${
            currentIdx === 0 ? 'no-image' : postArr[currentIdx - 1].path
          }.png`}
          height={300}
          width={800}
          className='object-cover w-full h-40 md:rounded-bl-2xl'
        />
        <Image
          alt='post_thumbnail'
          src={`/images/home/${
            currentIdx === postArr.length - 1
              ? 'no-image'
              : postArr[currentIdx + 1].path
          }.png`}
          height={300}
          width={800}
          className='object-cover w-full h-40 md:rounded-br-2xl'
        />
      </div>
      <div className='flex-col md:flex-row flex w-full absolute top-0 '>
        <button
          className={`flex w-full bg-cover bg-black/50 items-center hover:opacity-70 md:rounded-bl-2xl h-40`}
          onClick={onClickLeft}
        >
          <span className='text-yellow-300 text-3xl md:text-5xl  font-bold absolute left-4'>
            ←
          </span>
          <div className='text-center mx-auto text-white md:p-8 px-12'>
            {currentIdx === 0 ? (
              <h3 className='text-lg font-semibold'>이전 글이 없습니다.</h3>
            ) : (
              <>
                <h3 className='text-lg font-semibold'>
                  {postArr[currentIdx - 1].title}
                </h3>
                <p className='text-sm'>{postArr[currentIdx - 1].description}</p>
              </>
            )}
          </div>
        </button>
        <button
          className={`flex w-full bg-cover bg-black/50 items-center hover:opacity-70 md:rounded-br-2xl h-40`}
          onClick={onClickRight}
        >
          <span className='text-yellow-300 text-3xl md:text-5xl font-bold absolute right-4'>
            →
          </span>
          <div className='text-center mx-auto text-white md:p-8 px-12'>
            {currentIdx === postArr.length - 1 ? (
              <h3 className='text-lg font-semibold'>다음 글이 없습니다.</h3>
            ) : (
              <>
                <h3 className='text-lg font-semibold'>
                  {postArr[currentIdx + 1].title}
                </h3>
                <p className='text-sm'>{postArr[currentIdx + 1].description}</p>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default PostNavigator;

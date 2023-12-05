'use client';
import React from 'react';

import { Post } from '@/service/posts';
import AdjacentPostCard from '@/components/AdjacentPostCard';

type Props = {
  prev: Post | null;
  next: Post | null;
};
function PostNavigator({ prev, next }: Props) {
  return (
    <section className='flex shadow-md rounded-b-2xl overflow-hidden'>
      {prev && <AdjacentPostCard type='prev' post={prev} />}
      {next && <AdjacentPostCard type='next' post={next} />}
    </section>
  );
}

export default PostNavigator;

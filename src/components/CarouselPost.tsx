import React from 'react';

import { getNonFeatuerdPosts } from '@/service/posts';
import PostCard from '@/components/PostCard';
import MultiCarousel from '@/components/MultiCarousel';

async function CarouselPost() {
  const posts = await getNonFeatuerdPosts();

  return (
    <section>
      <h2 className='font-bold text-xl mt-8'>You may like</h2>
      <MultiCarousel>
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}

export default CarouselPost;

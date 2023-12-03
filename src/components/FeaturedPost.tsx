import React from 'react';

import PostsGrid from '@/components/PostsGrid';
import { getFeatuerdPosts } from '@/service/posts';

async function FeaturedPost() {
  const posts = await getFeatuerdPosts();

  return (
    <section>
      <h2 className='font-bold text-xl'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPost;

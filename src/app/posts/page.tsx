import PostsContent from '@/components/PostsContent';
import { getPosts } from '@/service/posts';
import React from 'react';

async function Posts() {
  const posts = await getPosts();

  return (
    <section className='sm:flex'>
      <PostsContent posts={posts} />
    </section>
  );
}

export default Posts;

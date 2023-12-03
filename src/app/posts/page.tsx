import PostsContent from '@/components/PostsContent';
import { getAllPosts } from '@/service/posts';
import React from 'react';

async function Posts() {
  const posts = await getAllPosts();

  return (
    <section className='sm:flex'>
      <PostsContent posts={posts} />
    </section>
  );
}

export default Posts;

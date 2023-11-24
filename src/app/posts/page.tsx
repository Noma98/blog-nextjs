import PostsContent from '@/components/PostsContent';
import { getPosts } from '@/service/posts';
import React from 'react';

async function Posts() {
  const posts = await getPosts();

  return (
    <div className='sm:flex'>
      <PostsContent posts={posts} />
    </div>
  );
}

export default Posts;

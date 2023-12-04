import React from 'react';

import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

async function Posts() {
  const posts = await getAllPosts();
  //@ts-ignore
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

export default Posts;

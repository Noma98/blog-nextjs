import React from 'react';
import { Metadata } from 'next';

import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: `All Tech Postings about Front-end`,
  openGraph: {
    title: "Posts | Noma's Tech Log",
  },
};

async function Posts() {
  const posts = await getAllPosts();
  //@ts-ignore
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

export default Posts;

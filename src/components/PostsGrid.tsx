import React from 'react';

import { Post } from '@/service/posts';
import PostCard from '@/components/PostCard';

type Props = {
  posts: Post[];
};
function PostsGrid({ posts }: Props) {
  return (
    <ul className='my-4 grid gap-4 p-2 grid-cols-1 md:grid-cols-3'>
      {posts.map((post, idx) => (
        <li key={idx}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostsGrid;

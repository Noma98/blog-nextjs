import path from 'path';
import { readFile } from 'fs/promises';
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};
export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

//fetch를 사용하지 않고 요청할 때(DB 접근 등..) 중복을 제거하려면 react의 cache를 사용하면 됨.
//한 페이지의 렌더링 사이클에 한해서 동일 인자에 대해 캐싱이 됨
//SSR할 때만 유의미한 성능 개선이 존재함.
export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getFeatuerdPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}
export async function getNonFeatuerdPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data/posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const next = index > 0 ? posts[index - 1] : null;

  const content = await readFile(filePath, 'utf-8');
  return { ...post, content, next, prev };
}

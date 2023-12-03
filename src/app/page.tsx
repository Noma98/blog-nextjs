import { getAllPosts } from '@/service/posts';
import CarouselPost from '@/components/CarouselPost';
import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className='flex flex-col'>
      <Hero />
      <div className='mt-12 px-4'>
        {/* @ts-expect-error Server Component*/}
        <FeaturedPost />
        <h2 className='font-bold text-xl mt-8'>You may like</h2>
        <CarouselPost posts={posts} />
      </div>
    </div>
  );
}

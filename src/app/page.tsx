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
        <h2 className='font-bold text-xl'>Featured Posts</h2>
        <div className='my-4 grid gap-4 p-2 grid-cols-1 md:grid-cols-3'>
          {posts
            .filter((post) => post.featured)
            .map((post, idx) => (
              <FeaturedPost idx={idx} {...post} key={idx} />
            ))}
        </div>
        <h2 className='font-bold text-xl mt-8'>You may like</h2>
        <CarouselPost posts={posts} />
      </div>
    </div>
  );
}

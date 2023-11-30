import Image from 'next/image';
import Link from 'next/link';

import Profile from '@public/images/home/profile.jpg';
import { getPosts } from '@/service/posts';
import CarouselPost from '@/components/CarouselPost';
import FeaturedPost from '@/components/FeaturedPost';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <Image
          src={Profile}
          alt='profile'
          width={200}
          height={200}
          className='rounded-full my-8'
        />
        <p className='text-2xl font-bold '>Hi, I&apos;m noma</p>
        <p className='text-lg '>Front-end engineer</p>
        <Link
          href='/contact'
          className='bg-blue-600 px-4 py-2 mt-4 text-white font-bold border-0 rounded-md'
        >
          Contact Me
        </Link>
      </div>
      <div className='mt-12 px-4'>
        <h2 className='font-bold text-xl'>Featured Posts</h2>
        <div className='my-4 grid gap-4 p-2 grid-cols-1 md:grid-cols-3'>
          {posts
            .filter((post) => post.featured)
            .map((post, idx) => (
              <FeaturedPost idx={idx} {...post} />
            ))}
        </div>
        <h2 className='font-bold text-xl mt-8'>You may like</h2>
        <CarouselPost posts={posts} />
      </div>
    </div>
  );
}

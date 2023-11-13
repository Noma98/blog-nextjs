import Image from 'next/image';

import Profile from '@public/images/home/profile.jpg';
import { getPosts } from '@/service/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='flex flex-col bg-white'>
      <div className='flex flex-col items-center'>
        <Image
          src={Profile}
          alt='profile'
          width={200}
          height={200}
          className='rounded-full my-8'
        />
        <p className='text-2xl font-bold '>Hi, I'm noma</p>
        <p className='text-lg '>Front-end engineer</p>
        <button className='bg-blue-600 px-4 py-2 mt-4 text-white font-bold border-0 rounded-md'>
          Contact Me
        </button>
      </div>
      <div className='mt-12 px-4'>
        <h2 className='font-bold text-xl'>Featured Posts</h2>
        <div className='my-4 grid gap-4 p-2 grid-cols-1 md:grid-cols-3'>
          {posts
            .filter((post) => post.featured)
            .map((post, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center shadow-md shadow-slate-200 rounded p-4'
              >
                <Image
                  src={`/images/home/${post.path}.png`}
                  alt='post_thumbnail'
                  width={400}
                  height={300}
                />
                <span className='text-xs align-bottom mt-2 ml-auto mr-2 text-gray-400'>
                  {post.date}
                </span>
                <h3 className='font-semibold mt-2'>{post.title}</h3>
                <p className='text-sm'>{post.description}</p>
                <span className='rounded-md px-2 py-1 text-xs mt-4 bg-yellow-400 '>
                  {post.category}
                </span>
              </div>
            ))}
        </div>
        <h2 className='font-bold text-xl mt-8'>You may like</h2>
        <div className='my-4 flex flex-col gap-4 overflow-scroll p-2 sm:flex-row'>
          {posts.map((post, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center shadow-md shadow-slate-300 rounded p-4'
            >
              <Image
                src={`/images/home/${post.path}.png`}
                alt='post_thumbnail'
                width={300}
                height={200}
                className='max-w-none'
              />
              <span className='text-xs align-bottom mt-2 ml-auto mr-2 text-gray-400'>
                {post.date}
              </span>
              <h3 className='font-semibold mt-2'>{post.title}</h3>
              <p className='text-sm'>{post.description}</p>
              <span className='rounded-md px-2 py-1 text-xs mt-4 bg-yellow-400 '>
                {post.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '@public/images/home/profile.jpg';

function Hero() {
  return (
    <section className='flex flex-col items-center'>
      <Image
        src={Profile}
        alt='profile'
        width={200}
        height={200}
        className='rounded-full my-8'
        priority
      />
      <p className='text-2xl font-bold '>{"Hi, I'm noma"}</p>
      <p className='text-lg '>Front-end engineer</p>
      <Link href='/contact'>
        <button className='bg-blue-600 px-4 py-2 mt-4 text-white font-bold border-0 rounded-md'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}

export default Hero;

import Image from 'next/image';
import Link from 'next/link';

import Profile from '@public/images/home/profile.jpg';

export default async function About() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={Profile}
        width={200}
        height={200}
        className='rounded-full my-2'
        alt='profile'
      />
      <h2 className='font-bold text-xl'>Hi, I&apos;m noma</h2>
      <p className='text-md font-semibold'>Front-end Engineer</p>
      <p className='text-xs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Link
        href='/contact'
        className='bg-blue-500 py-1 px-3 rounded-xl mt-4 mb-6 text-white font-bold'
      >
        Contact Me
      </Link>
      <div className='bg-gray-200 p-4 pb-8 rounded-sm m-4 mb-12 w-4/5 flex flex-col items-center'>
        <h3 className='font-bold mt-4'> Who am I?</h3>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h3 className='font-bold mt-4'> Career</h3>
        <p className='text-sm'>Successmode (2021.11~)</p>
        <h3 className='font-bold mt-4'> Skills</h3>
        <p className='text-sm text-center'>
          React, React-Native,TypeScript, Nextjs
          <br />
          Node, Express, MongoDB, Jest, Redux, React-Query
          <br /> PostCSS, Styled Components, Tailwind CSS
          <br /> Git, Github, Figma, Slack, Notion, Teams
        </p>
      </div>
    </div>
  );
}

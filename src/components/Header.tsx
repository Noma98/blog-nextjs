import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className='text-xl p-4 flex justify-between bg-white max-w-screen-2xl w-full fixed z-50'>
      <Link className='font-bold' href='/'>
        <h1>{"noma's Devlog"}</h1>
      </Link>
      <nav className='flex gap-4 text-base'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}

export default Header;

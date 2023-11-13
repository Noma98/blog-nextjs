import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: `Noma's blog`,
  description: `Frontend developer Noma's Tec blog`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={Pretendard.className}>
      <body className='bg-white text-black'>
        <header className='text-xl p-4 flex justify-between bg-white'>
          <Link className='font-bold' href='/'>
            noma's Devlog
          </Link>
          <nav className='flex gap-4 text-base'>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

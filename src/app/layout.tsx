import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <body className='bg-white text-black h-screen flex flex-col'>
        <Header />
        <main className='pt-20 bg-white flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

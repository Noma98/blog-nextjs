import { Metadata } from 'next';

import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';

export const metadata: Metadata = {
  title: 'About Me',
  description: "Introducing Noma's Career",
  openGraph: {
    title: "About | Noma's Tech Log",
  },
};

export default async function About() {
  return (
    <section className='flex flex-col items-center'>
      <Hero />
      <Introduction />
    </section>
  );
}

import CarouselPost from '@/components/CarouselPost';
import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';

export default async function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <div className='mt-12 px-4'>
        {/* @ts-ignore*/}
        <FeaturedPost />
        {/* @ts-ignore*/}
        <CarouselPost />
      </div>
    </div>
  );
}

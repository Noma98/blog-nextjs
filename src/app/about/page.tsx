import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';

export default async function About() {
  return (
    <section className='flex flex-col items-center'>
      <Hero />
      <Introduction />
    </section>
  );
}

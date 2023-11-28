import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import EmailForm from '@/components/EmailForm';
import Github from '@public/images/contact/github-logo.png';

function Contact() {
  return (
    <div className='text-center'>
      <h2 className='font-bold text-xl mt-4'>Contact me</h2>
      <p className='text-sm'>wiostz98kr@gmail.com</p>
      <a
        target='_blank'
        href='https://github.com/Noma98'
        className='inline-block'
      >
        <Image
          src={Github}
          width={50}
          height={50}
          className='mx-auto my-4'
          alt='github_logo'
        />
      </a>
      <h2 className='font-bold text-xl mt-8'>Or Send me an E-mail</h2>
      <EmailForm />
    </div>
  );
}

export default Contact;

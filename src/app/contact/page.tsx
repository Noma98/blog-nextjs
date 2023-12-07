import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import EmailForm from '@/components/EmailForm';

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/Noma98',
  },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];
function Contact() {
  return (
    <section className='text-center'>
      <h2 className='font-bold text-xl mt-4'>Contact me</h2>
      <p className='text-sm'>wiostz98kr@gmail.com</p>
      <ul className='flex justify-center mt-4 gap-2'>
        {LINKS.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              target='_blank '
              rel='noreferrer'
              className='text-5xl hover:text-blue-400'
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className='font-bold text-xl mt-8'>Or Send me an E-mail</h2>
      <EmailForm />
    </section>
  );
}

export default Contact;

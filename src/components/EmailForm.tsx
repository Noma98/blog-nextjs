'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import Banner, { BannerData } from '@/components/Banner';
import LoadingView from '@/components/LoadingView';
import { contactMe } from '@/service/contact';

function EmailForm() {
  const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: '',
  };
  const [inputValues, setInputValues] = useState(DEFAULT_DATA);
  const { from, subject, message } = inputValues;
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    contactMe(inputValues)
      .then(() => {
        setBanner({
          message: '이메일 전송에 성공하였습니다.',
          state: 'success',
        });
        setInputValues(DEFAULT_DATA);
      })
      .catch((err) => {
        setBanner({
          message: '이메일 전송에 실패하였습니다.',
          state: 'fail',
        });
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  const getIsActive = (): boolean => {
    return Boolean(from && subject && message);
  };

  return (
    <div className='bg-blue-500  mt-8 py-4'>
      {isLoading && <LoadingView />}
      {banner && <Banner banner={banner} />}
      <form className=' p-4 mx-auto max-w-md ' onSubmit={onSubmit}>
        <label
          htmlFor='email'
          className='text-white block text-left font-semibold mb-2'
        >
          Your Email
        </label>
        <input
          name='from'
          type='email'
          value={from}
          required
          autoFocus
          className='w-full rounded-md outline-none p-2 mb-2'
          onChange={onChange}
        />
        <label
          htmlFor='subject'
          className='text-white block text-left font-semibold mb-2'
        >
          Subject
        </label>
        <input
          name='subject'
          type='text'
          value={subject}
          required
          className='w-full rounded-md outline-none p-2 mb-2'
          onChange={onChange}
        />
        <label
          htmlFor='message'
          className='text-white block text-left font-semibold mb-2'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message'
          rows={10}
          required
          value={message}
          className='w-full rounded-md outline-none p-2 resize-none'
          onChange={onChange}
        />
        <button
          disabled={!getIsActive()}
          className='bg-white bg-opacity-10 hover:bg-opacity-30 border-white border border-solid text-white p-4 w-full rounded-md mt-2'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmailForm;

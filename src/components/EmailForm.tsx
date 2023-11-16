'use client';
import React from 'react';

function EmailForm() {
  return (
    <div className='bg-blue-500  mt-8 py-4'>
      <form className=' p-4 mx-auto max-w-md '>
        <label
          htmlFor='email'
          className='text-white block text-left font-semibold mb-2'
        >
          Your Email
        </label>
        <input
          type='email'
          id='email'
          className='w-full rounded-md outline-none p-2 mb-2'
        />
        <label
          htmlFor='subject'
          className='text-white block text-left font-semibold mb-2'
        >
          Subject
        </label>
        <input
          type='text'
          id='subject'
          className='w-full rounded-md outline-none p-2 mb-2'
        />
        <label
          htmlFor='message'
          className='text-white block text-left font-semibold mb-2'
        >
          Message
        </label>
        <textarea
          id='message'
          className='w-full rounded-md outline-none p-2 resize-none'
        />
        <button className='bg-white bg-opacity-10 hover:bg-opacity-30 border-white border border-solid text-white p-4 w-full rounded-md mt-2'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmailForm;

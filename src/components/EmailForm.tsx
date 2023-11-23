'use client';
import React, { useState } from 'react';

function EmailForm() {
  const initialInputValues = {
    email: '',
    subject: '',
    message: '',
  };
  const [inputValues, setInputValues] = useState(initialInputValues);
  const { email, subject, message } = inputValues;

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });
      alert('이메일을 전송하였습니다.');
      setInputValues(initialInputValues);
    } catch (err) {
      alert(`이메일 전송에 실패하였습니다.\n${err}`);
    }
  };

  const getIsActive = (): boolean => {
    return Boolean(email && subject && message);
  };

  return (
    <div className='bg-blue-500  mt-8 py-4'>
      <form className=' p-4 mx-auto max-w-md ' onSubmit={onSubmit}>
        <label
          htmlFor='email'
          className='text-white block text-left font-semibold mb-2'
        >
          Your Email
        </label>
        <input
          name='email'
          type='email'
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

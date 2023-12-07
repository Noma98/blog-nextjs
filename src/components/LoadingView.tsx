import React from 'react';

function LoadingView() {
  return (
    <div className='fixed w-full h-full top-0 left-0 flex  gap-2 flex-col justify-center items-center bg-black/50 z-50'>
      <div className='rounded-full w-14 h-14 border-8 border-blue-500 border-t-blue-50 animate-spin z-50'></div>
      <span className='text-white text-lg ml-2 font-semibold'>loading...</span>
    </div>
  );
}

export default LoadingView;

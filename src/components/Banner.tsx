import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'fail';
};
type Props = {
  banner: BannerData;
};
function Banner({ banner: { message, state } }: Props) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p
      className={`p-2 ${
        isSuccess ? 'bg-green-300/80' : 'bg-red-300/80'
      } max-w-[420px] rounded-md mx-auto`}
    >
      {`${icon} ${message}`}
    </p>
  );
}

export default Banner;

'use client';

import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  children: ReactNode;
};

function MultiCarousel({ children }: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      centerMode
      autoPlay
      itemClass='mb-10 min-h-100 p-4'
    >
      {children}
    </Carousel>
  );
}

export default MultiCarousel;

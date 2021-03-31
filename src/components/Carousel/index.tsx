import { useRef } from 'react';
import { Carousel, CarouselProps } from 'antd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './style.less';

const CustomCarousel = (props: CarouselProps) => {
  const carouselRef = useRef<any>();

  const handleClickRight = () => {
    carouselRef.current?.next();
  }

  const handleClickLeft = () => {
    carouselRef.current?.prev();
  }

  return (
    <div className='carousel-wrapper'>
      <Carousel
        {...props}
        ref={ref => {
          carouselRef.current = ref;
        }}
      />
      <FaChevronLeft onClick={handleClickLeft} className='carousel-left-icon' />
      <FaChevronRight onClick={handleClickRight} className='carousel-right-icon' />
    </div>
  );
}

export default CustomCarousel;
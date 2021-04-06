import { useRef } from 'react';
import { Carousel, CarouselProps } from 'antd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './style.less';

interface CustomCarouselProps extends CarouselProps {
  showArrows?: boolean
}

const CustomCarousel = ({
  showArrows = true,
  ...props
}: CustomCarouselProps) => {
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
      {showArrows
      && <><FaChevronLeft onClick={handleClickLeft} className='carousel-left-icon' />
      <FaChevronRight onClick={handleClickRight} className='carousel-right-icon' /></>}
    </div>
  );
}

export default CustomCarousel;
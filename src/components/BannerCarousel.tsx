import { useState } from 'react';
import { Row, Col, Typography, Tag } from 'antd';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa'

import { useInterval } from 'helpers/hooks';
import './BannerCarousel.less';

const { Paragraph, Title } = Typography

type BannerCarouselProps = {
  items: {
    imagePath: string;
    title: string;
    description:string;
  }[];
}

const BannerCarousel = ({
  items
}: BannerCarouselProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useInterval(() => {
    if(autoplay) {
      handleClickRight();
    }
  }, 4000);

  const handleClickRight = () => {
    if(selectedItemIndex === items.length - 1) {
      setSelectedItemIndex(0);
    } else {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  }

  const handleClickLeft = () => {
    if(selectedItemIndex === 0) {
      setSelectedItemIndex(items.length - 1);
    } else {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  }

  return (
    <div className='home-carousel-wrapper' onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      { items.map((item, i) => (
        <img key={i} src={items[i].imagePath} alt='' className={`home-carousel-background-image ${selectedItemIndex === i ? 'selected' : ''}`} />
      )) }
      <div className='content-container pt-4 pb-5'>
        <div className='home-carousel-cards-container'>
          { items.map((item, i) => (
            <div key={i} className={`home-carousel-card ${selectedItemIndex === i ? 'selected' : ''}`}>
              <Row>
                <Col span={14}>
                  <img src={item.imagePath} alt='' className='home-carousel-card-image' />
                </Col>
                <Col span={10} className='home-carousel-card-info-container p-3'>
                  <div>
                    <Row className='mb-2'>
                      <Col>
                        <Tag color='blue'>FEATURED</Tag>
                      </Col>
                      <Col>
                        <Tag color='blue'>NEWS</Tag>
                      </Col>
                    </Row>
                    <Title level={3} ellipsis={{rows: 3}} className='mb-2'>{item.title}</Title>
                    <Paragraph ellipsis={{rows: 5}} className='mb-2'>{item.description}</Paragraph>
                    <Row gutter={8} align='middle' className='mb-2'>
                      <Col className='home-carousel-calendar-icon-container'>
                        <FaRegCalendarAlt className='home-carousel-calendar-icon'/>
                      </Col>
                      <Col>
                        12/03/2021
                      </Col>
                    </Row>
                  </div>
                  <Row gutter={8}>
                    { items.map((item, i) => (
                      <Col key={i}>
                        <div className={`home-carousel-pointer ${selectedItemIndex === i ? 'selected' : ''}`}/>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          )) }
          <FaChevronLeft onClick={handleClickLeft} className='home-carousel-left-icon' />
          <FaChevronRight onClick={handleClickRight} className='home-carousel-right-icon' />
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
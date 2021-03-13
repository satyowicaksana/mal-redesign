import { useState } from 'react';
import { Row, Col, Typography, Tag } from 'antd';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa'

import './Carousel.less';

const { Paragraph, Title } = Typography

type CarouselProps = {
  items: string[];
}

const Carousel = ({
  items
}: CarouselProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

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
      <div className='carousel-wrapper'>
        { items.map((item, i) => (
          <div key={i} className={`carousel-card ${selectedItemIndex === i ? 'selected' : ''}`}>
            <Row>
              <Col span={14}>
                <img src='https://i2.wp.com/anigate.id/wp-content/uploads/2019/03/fate-grand-order-camelot-e1553412113985.jpg?fit=1200%2C807&ssl=1' alt='' className='carousel-card-image' />
              </Col>
              <Col span={10} className='carousel-card-info-container p-3'>
                <div>
                  <Row className='mb-2'>
                    <Col>
                      <Tag color='blue'>FEATURED</Tag>
                    </Col>
                    <Col>
                      <Tag color='blue'>NEWS</Tag>
                    </Col>
                  </Row>
                  <Title level={3} ellipsis={{rows: 3}} className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                  <Paragraph ellipsis={{rows: 5}} className='mb-2'>Lorem ipsum dolor sit amet</Paragraph>
                  <Row gutter={8} align='middle' className='mb-2'>
                    <Col className='carousel-calendar-icon-container'>
                      <FaRegCalendarAlt className='carousel-calendar-icon'/>
                    </Col>
                    <Col>
                      12/03/2021
                    </Col>
                  </Row>
                </div>
                <Row gutter={8}>
                  <Col>
                    <div className='carousel-pointer selected'/>
                  </Col>
                  <Col>
                    <div className='carousel-pointer'/>
                  </Col>
                  <Col>
                    <div className='carousel-pointer'/>
                  </Col>
                  <Col>
                    <div className='carousel-pointer'/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )) }
        <FaChevronLeft onClick={handleClickLeft} className='carousel-left-icon' />
        <FaChevronRight onClick={handleClickRight} className='carousel-right-icon' />
      </div>
  );
}

export default Carousel;
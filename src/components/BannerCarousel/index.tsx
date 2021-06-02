import { useState } from 'react';
import { Row, Col, Typography, Tag, Skeleton } from 'antd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { useInterval } from 'hooks'
import { News } from 'interfaces/news'
import './style.less';

const { Paragraph, Title } = Typography

type BannerCarouselProps = {
  newsList: News[]
  loading?: boolean
}

const BannerCarousel = ({
  newsList,
  loading
}: BannerCarouselProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useInterval(() => {
    if(autoplay && newsList.length > 0) {
      handleClickRight();
    }
  }, 4000);

  const handleClickRight = () => {
    if(selectedItemIndex === newsList.length - 1) {
      setSelectedItemIndex(0);
    } else {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  }

  const handleClickLeft = () => {
    if(selectedItemIndex === 0) {
      setSelectedItemIndex(newsList.length - 1);
    } else {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  }


  return (
    <div className='banner-carousel-wrapper'>
      {!loading
      && newsList.map((news, i) => (
        <img key={i} src={newsList[i].imageURL} alt='' className={`banner-carousel-background-image ${selectedItemIndex === i ? 'selected' : ''}`} />
      ))}
      <div className='content-container pt-4 pb-5'>
        <div
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className='banner-carousel-cards-container'
        >
          {newsList.length === 0 || loading
          ? <div 
            className='banner-carousel-card selected loading'>
              <Row className='banner-carousel-card-content-container'>
                <Col md={14} xs={24}>
                  <Skeleton.Button active={loading} className='skeleton-stretch'/>
                </Col>
                <Col md={10} xs={24} className='banner-carousel-card-info-container p-3'>
                  <Skeleton active={loading}/>
                </Col>
              </Row>
            </div>
          : newsList.map((news, i) => (
            <div
              key={i}
              onClick={() => window.open(news.link, '_blank')}
              className={`banner-carousel-card ${selectedItemIndex === i ? 'selected' : ''}`}
            >
              <Row>
                <Col md={14} xs={24}>
                  <img src={news.imageURL} alt='' className='banner-carousel-card-image' />
                </Col>
                <Col md={10} xs={24} className='banner-carousel-card-info-container p-3'>
                  <div>
                    <Row gutter={8} className='mb-2'>
                      <Col>
                        <Tag color='blue'>FEATURED</Tag>
                      </Col>
                      <Col>
                        <Tag color='blue'>NEWS</Tag>
                      </Col>
                    </Row>
                    <Title level={2} ellipsis={{rows: 3}} className='mb-2'>{news.title}</Title>
                    <Paragraph ellipsis={{rows: 5}} className='desktop mb-2'>{news.description}</Paragraph>
                  </div>
                  <Row gutter={8}>
                    {newsList.map((news, i) => (
                      <Col key={i}>
                        <div className={`banner-carousel-pointer ${selectedItemIndex === i ? 'selected' : ''}`}/>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          )) }
          {!loading && newsList.length > 0
          && <>
              <FaChevronLeft onClick={handleClickLeft} className='banner-carousel-left-icon' />
              <FaChevronRight onClick={handleClickRight} className='banner-carousel-right-icon' />
            </>}
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
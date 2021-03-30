import { useState, useEffect } from 'react'
import { Typography, Row, Col, Divider } from 'antd';

import Carousel from 'components/Carousel'
import AnimeCard from 'components/AnimeCard';
import { windowSizes } from 'consts';
import { useWindowSize } from 'helpers/hooks';
import './AnimeCardsSection.less';

const { Title, Link } = Typography;

type AnimeCardsSectionProps = {
  animes: {
    title: string;
    imagePath: string;
  }[];
}

const AnimeCardsSection = ({
  animes,
}: AnimeCardsSectionProps) => {
  const { width } = useWindowSize();

  const [carouselCardColumn, setCarouselCardColumn] = useState(6);

  useEffect(() => {
    if(width <= windowSizes.lg.max) {
      setCarouselCardColumn(4);
      return
    }
    setCarouselCardColumn(6);
  }, [width])

  return (
    <div className='mb-5'>
      <Row gutter={{xs: 0, md: 32}} align='middle' className='mb-3'>
        <Col>
          <Title level={3}>Winter 2021 Anime</Title>
        </Col>
        <Col flex='auto' className='desktop'>
          <Divider/>
        </Col>
        <Col className='desktop'>
          <Link strong>VIEW MORE</Link>
        </Col>
      </Row>
      {width <= windowSizes.md.max ? (
        <div className='anime-cards-section-swiper'>
          {animes.map((anime, i) => (
            <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
              <AnimeCard
                anime={anime}
              />
            </div>
          ))}
        </div>
      ) : (
        <Carousel
          dots={false}
          className='anime-cards-section-carousel mb-1'
        >
          { Array.from(Array(Math.ceil(animes.length / 6)).keys()).map(i => (
            <div key={i}>
              <Row gutter={carouselCardColumn * 6} className='anime-cards-section-slide'>
                { Array.from(Array(carouselCardColumn).keys()).map(j => (
                  <Col key={`${i}${j}`} span={24 / carouselCardColumn}>
                    {animes[i * carouselCardColumn + j] && 
                      <AnimeCard
                        anime={animes[i * carouselCardColumn + j]}
                      />
                    }
                  </Col>
                )) }
              </Row>
            </div>
          )) }
        </Carousel>
      )}
      <Row justify='end' className='mobile mt-2'>
        <Col>
          <Link strong>VIEW MORE</Link>
        </Col>
      </Row>
    </div>
  );
}

export default AnimeCardsSection;
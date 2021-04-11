import { useState, useEffect } from 'react'
import { Typography, Row, Col, Divider, Skeleton } from 'antd';

import { Carousel, AnimeCard } from 'components'
import { windowSizes } from 'consts';
import { useWindowSize } from 'hooks'
import { Anime } from 'interfaces/anime'
import './style.less';

const { Title, Link } = Typography;

type AnimeCardsSectionProps = {
  title: string
  animes: Anime[]
  loading?: boolean
}

const AnimeCardsSection = ({
  title,
  animes,
  loading
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
          <Title level={3}>{title}</Title>
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
          {loading
          ? Array.from(Array(6).keys()).map(i => 
              <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                <Skeleton.Button key={i} active className='skeleton-anime-card'/>
              </div>
            )
          : animes.map((anime, i) => 
              <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                <AnimeCard
                  anime={anime}
                />
              </div>
            )}
        </div>
      ) : (
        <Carousel
          dots={false}
          showArrows={!loading}
          className='anime-cards-section-carousel mb-1'
        >
          { Array.from(Array(Math.ceil((loading ? 6 : animes.length) / 6)).keys()).map(i => (
            <div key={i}>
              <Row gutter={carouselCardColumn * 6} className='anime-cards-section-slide'>
                { Array.from(Array(carouselCardColumn).keys()).map(j => (
                  <Col key={`${i}${j}`} span={24 / carouselCardColumn}>
                    {loading
                    ? <Skeleton.Button active key={i} className='skeleton-anime-card'/>
                    : animes[i * carouselCardColumn + j]
                    && <AnimeCard
                        onClick={() => window.open(animes[i * carouselCardColumn + j].url, '_blank')}
                        anime={animes[i * carouselCardColumn + j]}
                      />}
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
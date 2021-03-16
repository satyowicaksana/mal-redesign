import { useState, useEffect } from 'react';
import { Row, Col, Divider, Typography, Button } from 'antd';

import BannerCarousel from 'components/BannerCarousel';
import Carousel from 'components/Carousel';
import AnimeCard from 'components/AnimeCard';
import { useWindowSize } from 'helpers/hooks';
import './Home.less';

const featuredNews = [
  {
    imagePath: 'https://media.comicbook.com/2020/09/edens-zero-anime-poster-hiro-mashima-fairy-tail-creator-1238508-1280x0.jpeg',
    title: `Edens Zero Anime's Video Reveals More Cast, T.M.Revolution Song, Netflix 2021 Streaming`,
    description: 'Sayaka Ohara, Houchu Ohtsuka, Kikuko Inoue join cast; CHICO with Honeyworks perform ending'
  },
  {
    imagePath: 'https://cdn.animenewsnetwork.com/thumbnails/max650x650/cms/news.4/170552/madoka-magica-10.jpg',
    title: 'Madoka Magica Anime Gets 10th Anniversary Event on April 25',
    description: `Director Junichirō Taniguchi's 10th anniversary illustration unveiled`,
  },
  {
    imagePath: 'https://cdn.trinikid.com/109514/uploads/7a192750-f68a-11ea-9adf-d9b634015f55_800_420.jpeg',
    title: `A Tale of Two Redheads: Yona vs. Shirayuki`,
    description: 'Making comparisons amongst different facets of popular anime is a fun little exercise I like to engage with occasionally, especially when certain trends end up getting clustered together. In one such instance back in 2015, we coincidentally saw two different anime adaptations of shoujo manga with red-haired female protagonists in fantasy settings, and the general similarities continue well beyond that point, so today, I wanted to take a closer look at Yona from Yona of the Dawn and Shirayuki from Snow White with the Red Hair to see how they compare and what makes they work within their respective stories.'
  },
]

const animes = [
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://d.newsweek.com/en/full/1702195/attack-titan-final-season-4-visual.webp?w=790&f=0eb6a783944916223ecc40e6a4aa5ed4',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  }
]

const { Title, Text } = Typography;

const Home = () => {
  const { width } = useWindowSize();

  const [cardColumn, setCardColumn] = useState(6);

  useEffect(() => {
    if(width) {
      if(width < 1216) {
        setCardColumn(4);
      } else {
        setCardColumn(6)
      }
    }
  }, [width])


  return (
    <div>
      <BannerCarousel items={featuredNews}/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Row gutter={32} align='middle' className='mb-3'>
            <Col>
              <Title level={3}>Winter 2021 Anime</Title>
            </Col>
            <Col flex='auto'>
              <Divider/>
            </Col>
            <Col>
              <Button type='link'>VIEW ALL</Button>
            </Col>
          </Row>
          <Carousel className='home-cards-carousel'>
            { Array.from(Array(Math.ceil(animes.length / 6)).keys()).map(i => (
              <div key={i}>
                <Row gutter={32} className='home-cards-slide'>
                  { Array.from(Array(cardColumn).keys()).map(j => (
                    <Col key={`${i}${j}`} span={24 / cardColumn}>
                      {/*{animes[i * cardColumn + j] || (animes.length >= cardColumn && animes[i * cardColumn + j - animes.length])}*/}
                      {animes[i * cardColumn + j] && 
                        <AnimeCard
                          title={animes[i * cardColumn + j].title}
                          imagePath={animes[i * cardColumn + j].imagePath}
                        />
                      }
                    </Col>
                  )) }
                </Row>
              </div>
            )) }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home;
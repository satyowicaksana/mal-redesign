import { Typography, Row, Col, Divider} from 'antd';

import Carousel from 'components/Carousel'
import AnimeCard from 'components/AnimeCard';
import './AnimeCardsSection.less';

const { Title, Link } = Typography;

type AnimeCardsSectionProps = {
  animes: {
    title: string;
    imagePath: string;
  }[];
  cardColumn: number;
}

const AnimeCardsSection = ({
  animes,
  cardColumn
}: AnimeCardsSectionProps) => {
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
      <Carousel
        dots={false}
        className='anime-cards-section-carousel mb-1'
      >
        { Array.from(Array(Math.ceil(animes.length / 6)).keys()).map(i => (
          <div key={i}>
            <Row gutter={cardColumn * 6} className='anime-cards-section-slide'>
              { Array.from(Array(cardColumn).keys()).map(j => (
                <Col key={`${i}${j}`} span={24 / cardColumn}>
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
      <Row justify='end' className='mobile mt-2'>
        <Col>
          <Link strong>VIEW MORE</Link>
        </Col>
      </Row>
    </div>
  );
}

export default AnimeCardsSection;
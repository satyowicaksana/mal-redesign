import { Typography, Row, Col, Divider, Skeleton} from 'antd';

import { StoryCard } from 'components'
import { News } from 'interfaces/news'
import './style.less';

const { Title, Link } = Typography;

type StoryCardsSectionProps = {
  stories: News[];
  loading?: boolean;
}

const StoryCardsSection = ({
  stories,
  loading
}: StoryCardsSectionProps) => {
  return (
    <div className='mb-5'>
      <Row gutter={{xs: 0, md: 32}} align='middle' className='mb-3'>
        <Col>
          <Title level={3}>Anime & Manga News</Title>
        </Col>
        <Col flex='auto' className='desktop'>
          <Divider/>
        </Col>
        <Col className='desktop'>
          <Link strong>VIEW MORE</Link>
        </Col>
      </Row>
      <Row gutter={[{ md: 24, xl: 40 }, { xs: 8, sm: 8, md: 24, xl: 40 }]}>
        {loading
        ? Array.from(Array(4).keys()).map(i => (
          <Col key={i} xs={24} lg={12}>
            <Row className='story-card'>
              <Col xs={8} md={12}>
                <Skeleton.Button active className='skeleton-stretch' />
              </Col>
              <Col xs={16} md={12} className='p-2'>
                <Skeleton active/>
              </Col>
            </Row>
          </Col>
          ))
        : stories.map((story, i) => (
            <Col key={i} xs={24} lg={12}>
              <StoryCard
                story={story}
              />
            </Col>
          )) }
      </Row>
      <Row justify='end' className='mobile mt-2'>
        <Col>
          <Link strong>VIEW MORE</Link>
        </Col>
      </Row>
    </div>
  );
}

export default StoryCardsSection;
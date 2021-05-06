import { HTMLAttributes } from 'react';
import { Row, Col, Typography } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'
import { News } from 'interfaces/news'
import './style.less';
import { Article } from 'interfaces/anime';

const { Title, Text } = Typography;

interface StoryCardProps extends HTMLAttributes<HTMLDivElement> {
  story: Article
}

const StoryCard = ({
  story,
  ...props
}: StoryCardProps) => {
  const { title, image_url } = story;

  const { width } = useWindowSize();

  return (
    <Row {...props} className='story-card'>
      <Col xs={8} md={12}>
        <img src={image_url} alt='' className='story-card-image'/>
      </Col>
      <Col xs={16} md={12} className='story-card-info-container p-2'>
        <Title level={4} ellipsis={{rows: width < windowSizes.md.min ? 3 : 4}}>
        {title}
        </Title>
        <Row gutter={4}>
          <Col className='centered-flex'>
            <FaRegCalendarAlt className='story-card-calendar-icon'/>
          </Col>
          <Col>
            <Text>{moment(story.date).format('MMM DD, YYYY')}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default StoryCard;
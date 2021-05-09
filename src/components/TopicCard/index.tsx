import { HTMLAttributes } from 'react';
import { Row, Col, Typography } from 'antd';
import { FaComment } from 'react-icons/fa'
import moment from 'moment'

import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'
import { News } from 'interfaces/news'
import './style.less';
import { Topic } from 'interfaces/anime';

const { Title, Link, Text } = Typography;

interface TopicCardProps extends HTMLAttributes<HTMLDivElement> {
  topic: Topic
}

const TopicCard = ({
  topic,
  ...props
}: TopicCardProps) => {
  const { title, url, author_name, author_url, date_posted, replies, last_post } = topic;

  const { width } = useWindowSize();

  return (
    <Row gutter={16} {...props} justify='space-between' className='topic-card p-3'>
      <Col>
        <Title level={5} className='mb-1'><Link onClick={() => window.open(url, '_blank')}>{title}</Link></Title>
        <Link onClick={() => window.open(author_url, '_blank')}>{author_name}</Link><Text> - {moment(date_posted).format('MMM DD, YYYY')}</Text>
      </Col>
      <Col>
        <Row justify='end'>
          <Col>
            <Text className='typography-fade'><FaComment/> {replies}</Text>
          </Col>
        </Row>
        <Text className='typography-fade'>{moment(last_post.date_posted).fromNow()}</Text>
      </Col>
    </Row>
  );
}

export default TopicCard;
import { HTMLAttributes } from 'react';
import { Row, Col, Typography, Skeleton } from 'antd';
import { FaComment } from 'react-icons/fa'
import moment from 'moment'

import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'
import { News } from 'interfaces/news'
import './style.less';
import { Topic } from 'interfaces/anime';

const { Title, Link, Text } = Typography;

interface TopicCardProps extends HTMLAttributes<HTMLDivElement> {
  topic?: Topic
  loading?: boolean
}

const TopicCard = ({
  topic,
  loading,
  ...props
}: TopicCardProps) => {
  const { width } = useWindowSize();

  if(!topic) return (
    <div {...props}>
      <Row gutter={16} justify='space-between' className='topic-card p-2'>
        <Skeleton active={loading} paragraph={{rows: 0}}/>
      </Row>
    </div>
  )

  const { title, url, author_name, author_url, date_posted, replies, last_post } = topic;

  return (
    <div {...props}>
      <Row gutter={16} justify='space-between' className='topic-card p-2'>
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
    </div>
  );
}

export default TopicCard;
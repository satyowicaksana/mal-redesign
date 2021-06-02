import { HTMLAttributes } from 'react';
import { Row, Col, Typography, Skeleton } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'
import { News } from 'interfaces/news'
import './style.less';
import { Article } from 'interfaces/anime';

const { Title, Text } = Typography;

interface ArticleCardProps extends HTMLAttributes<HTMLDivElement> {
  article?: Article
  news?: News
  loading?: boolean
}

const ArticleCard = ({
  article,
  news,
  loading,
  ...props
}: ArticleCardProps) => {
  const { width } = useWindowSize();

  if(!article && !news) return (
    <Row {...props} className='article-card'>
      <Col xs={8} md={12}>
        <Skeleton.Button active={loading} className='skeleton-stretch'/>
      </Col>
      <Col xs={16} md={12} className='article-card-info-container p-2'>
        <Skeleton active={loading}/>
      </Col>
    </Row>
  )

  return (
    <Row {...props} className='article-card'>
      <Col xs={8} lg={12}>
        <img src={article?.image_url || news?.imageURL} alt='' className='article-card-image'/>
      </Col>
      <Col xs={16} lg={12} className='article-card-info-container p-2'>
        <Title level={4} ellipsis={{rows: width < windowSizes.md.min ? 3 : 4}}>
        {article?.title || news?.title}
        </Title>
        {article && (
          <Row gutter={4}>
            <Col className='centered-flex'>
              <FaRegCalendarAlt className='article-card-calendar-icon'/>
            </Col>
            <Col>
              <Text>{moment(article.date).format('MMM DD, YYYY')}</Text>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default ArticleCard;
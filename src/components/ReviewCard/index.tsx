import { HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Typography, Avatar, Tag, Skeleton, Tooltip,  } from 'antd'
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import moment from 'moment'

import { Review } from 'interfaces/anime'
import {
  selectAnime
} from 'store/anime'
import { formatter, styler } from 'helpers'
import './style.less'
import { FaThumbsUp } from 'react-icons/fa'

const { Text, Link, Title, Paragraph } = Typography;

interface ReviewCardProps extends HTMLAttributes<HTMLDivElement> {
  review?: Review
  loading?: boolean
}

const ReviewCard = ({
  review,
  loading
}: ReviewCardProps) => {
  const anime = useSelector(selectAnime)

  if(!review) {
    return (
      <Row gutter={16} wrap={false} className='mb-4'>
        <Col className='anime-review-card-reviewer-profile-container'>
          <Skeleton.Avatar active={loading} className='skeleton-avatar-large'/>
        </Col>
        <Col flex='auto'>
          <div className='anime-review-card-item-arrow'/>
          <div className='anime-review-card-item-container p-2'>
            <Row justify='space-between' wrap={false} className='mb-1'>
              <Skeleton active={loading}/>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <Row gutter={16} wrap={false}>
      <Col className='anime-review-card-reviewer-profile-container desktop'>
        <Avatar src={review.reviewer.image_url} size='large' className='mb-1'/>
        <Link className='anime-review-card-reviewer-name typography-block typography-small'>{review.reviewer.username}</Link>
      </Col>
      <Col flex='auto'>
        <div className='anime-review-card-item-arrow desktop'/>
        <div className='anime-review-card-item-container p-2'>
        <Row gutter={8} wrap={false} justify='space-between' className='mobile'>
          <Col>
            <Row wrap={false} gutter={8} align='middle' className='mb-1'>
              <Col>
                <Avatar src={review.reviewer.image_url}/>
              </Col>
              <Col>
                <Paragraph ellipsis={{rows: 2}}>
                  <Link>{review.reviewer.username}</Link>
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col>
            <Text className='color-success clickable'>
              <FaThumbsUp/> {review.helpful_count}
            </Text>
          </Col>
        </Row>
          <Row justify='space-between' wrap={false} className='mb-1'>
            <Col>
              <Row gutter={8} wrap={false}>
                <Col>
                  <Tag color='success'>
                    <Row gutter={4} wrap={false} align='middle'>
                      <Col>
                        <Title level={4} className='centered-flex'><AiFillStar/></Title>
                      </Col>
                      <Col>
                        <Title level={4}>{review.reviewer.scores.overall}</Title>
                      </Col>
                    </Row>
                  </Tag>
                </Col>
                <Col>
                  <Text strong className='typography-fade typography-block'>{moment(review.date).format('MMM DD, YYYY')}</Text>
                  <Text className='typography-fade typography-block typography-small'>{review.reviewer.episodes_seen} of {anime.data?.episodes} episodes seen</Text>
                </Col>
              </Row>
            </Col>
            <Col className='desktop'>
              <Tooltip overlay={
                <Text type='secondary'>{review.helpful_count} users found this helpful</Text>
              }>
                <Title level={5} className='color-success clickable'>
                  <FaThumbsUp/> {review.helpful_count}
                </Title>
              </Tooltip>
            </Col>
          </Row>
          <Paragraph style={{whiteSpace: 'pre-line'}} ellipsis={{rows: 4, expandable: true, symbol: 'More'}} >
            {formatter.htmlDecode(review.content.replace(/\\n/g, ""))}
          </Paragraph>
        </div>
      </Col>
    </Row>
  );
}

export default ReviewCard;
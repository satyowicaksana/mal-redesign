import { HTMLAttributes } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Typography, Avatar, Tag, Skeleton,  } from 'antd'
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import moment from 'moment'

import { Review } from 'interfaces/anime'
import {
  selectAnime
} from 'store/anime'
import { formatter } from 'helpers'
import './style.less'

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
        <Col className='anime-review-reviewer-profile-container'>
          <Skeleton.Avatar active={loading} className='skeleton-avatar-large'/>
        </Col>
        <Col flex='auto'>
          <div className='anime-review-item-arrow'/>
          <div className='anime-review-item-container p-2'>
            <Row justify='space-between' wrap={false} className='mb-1'>
              <Skeleton active={loading}/>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <Row gutter={16} wrap={false} className='mb-4'>
      <Col className='anime-review-reviewer-profile-container'>
        <Avatar src={review.reviewer.image_url} size='large' className='mb-1'/>
        <Link className='anime-review-reviewer-name typography-block typography-small'>{review.reviewer.username}</Link>
      </Col>
      <Col flex='auto'>
        <div className='anime-review-item-arrow'/>
        <div className='anime-review-item-container p-2'>
          <Row justify='space-between' wrap={false} className='mb-1'>
            <Col>
              <Row gutter={8} wrap={false}>
                <Col>
                  <Tag color='orange'>
                    <Row gutter={4} wrap={false} align='middle'>
                      <Col>
                        <Title type='secondary' level={4} className='centered-flex'><AiFillStar/></Title>
                      </Col>
                      <Col>
                        <Title type='secondary' level={4}>{review.reviewer.scores.overall}</Title>
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
            <Col>
              <Title level={5}>
                <Row gutter={4} align='middle' wrap={false}>
                  <Col>
                    <Text className='typography-fade centered-flex'><ImArrowUp/></Text>
                  </Col>
                  <Col>
                    <Text>123</Text>
                  </Col>
                  <Col className='centered-flex'>
                    <Text className='typography-fade centered-flex'><ImArrowDown/></Text>
                  </Col>
                </Row>
              </Title>
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
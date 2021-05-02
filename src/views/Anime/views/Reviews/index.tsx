import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Select, Avatar, Tag } from 'antd'
import { AiFillStar } from 'react-icons/ai'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'
import moment from 'moment'

import {
  selectAnime,
  selectReviews,
  getReviews
} from 'store/anime'
import {
  formatter
} from 'helpers'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Reviews = () => {
  const dispatch = useDispatch()

  const anime = useSelector(selectAnime)
  const reviews = useSelector(selectReviews)

  useEffect(() => {
    dispatch(getReviews("1"))
  }, [dispatch])
  useEffect(() => {
    console.log('reviews', reviews)
    if(reviews.data[0])
      console.log(reviews.data[0].content.replaceAll('\r', '').replaceAll('\n', '') )
  }, [reviews])

  return (
    <div>
      <Row gutter={16} justify='end' className='mb-2'>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Text>Sort by:</Text>
            </Col>
            <Col>
              <Select defaultValue="Recent">
                <Option value="Recent">Recent</Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <Button type='default'>WRITE REVIEW</Button>
        </Col>
      </Row>
      {reviews.data?.map(review => (
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
      ))}
    </div>
  ) 
}

export default Reviews;
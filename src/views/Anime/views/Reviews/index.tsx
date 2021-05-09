import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Select, Avatar, Tag } from 'antd'
import { AiFillStar } from 'react-icons/ai'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'
import moment from 'moment'

import {
  selectAnime,
  selectReviews
} from 'store/anime'
import {
  ReviewCard
} from 'components'
import {
  formatter
} from 'helpers'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Reviews = () => {
  const anime = useSelector(selectAnime)
  const reviews = useSelector(selectReviews)

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
        <ReviewCard review={review}/>
      ))}
    </div>
  ) 
}

export default Reviews;
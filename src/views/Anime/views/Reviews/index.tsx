import { useSelector } from 'react-redux'
import { Row, Col, Typography, Button, Select } from 'antd'

import {
  selectReviews
} from 'store/anime'
import {
  ReviewCard
} from 'components'
import {
  checker
} from 'helpers'
import './style.less'

const { Text } = Typography
const { Option } = Select

const Reviews = () => {
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
      {checker.isFetched(reviews)
        ? reviews.data.slice(0, 2).map(review => (
          <div key={review.mal_id} className='mb-4 sm-mb-2'>
            <ReviewCard review={review}/>
          </div>
        ))
        : Array.from(Array(2).keys()).map(i => (
          <div key={i} className='mb-4 sm-mb-2'>
            <ReviewCard loading={reviews.loading}/>
          </div>
        ))}
    </div>
  ) 
}

export default Reviews;
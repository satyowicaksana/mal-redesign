import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  selectReviews,
  getReviews
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Reviews = () => {
  const dispatch = useDispatch()

  const reviews = useSelector(selectReviews)

  useEffect(() => {
    dispatch(getReviews("1"))
  }, [dispatch])
  useEffect(() => {
    console.log('reviews', reviews)
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
      <Row gutter={16} wrap={false}>
        <Col className='anime-review-reviewer-profile-container'>
          <Avatar src='https://static.wikia.nocookie.net/boruto/images/9/9d/375px-NarutoBorutoMovie.jpg/revision/latest/top-crop/width/360/height/450?cb=20200121144920' size='large' className='mb-1'/>
          <Link className='anime-review-reviewer-name typography-block typography-small'>Naruto Uzumaki</Link>
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
                          <Title type='secondary' level={4}>10</Title>
                        </Col>
                      </Row>
                    </Tag>
                  </Col>
                  <Col>
                    <Text strong className='typography-fade typography-block'>16 Oct, 2021</Text>
                    <Text className='typography-fade typography-block typography-small'>1 of 1 episodes seen</Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Title level={5}>
                  <Row gutter={4} align='middle' wrap={false}>
                    <Col>
                      <Text className='typography-fade centered-flex'><FaArrowAltCircleUp/></Text>
                    </Col>
                    <Col>
                      <Text>123</Text>
                    </Col>
                    <Col className='centered-flex'>
                      <Text className='typography-fade centered-flex'><FaArrowAltCircleDown/></Text>
                    </Col>
                  </Row>
                </Title>
              </Col>
            </Row>
            <Title level={4}>Best Anime Ever Best Anime Ever Best Anime Ever Best Anime Ever  Best Anime Ever Best Anime Ever Best Anim</Title>
            <Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'More'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  ) 
}

export default Reviews;
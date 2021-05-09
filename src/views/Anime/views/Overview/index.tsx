import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag, Divider } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  CharactersAndStaffCard,
  StaffCard,
  ReviewCard,
  StoryCard,
  TopicCard,
  AnimeCard
} from 'components'
import {
  selectArticles,
  selectCharactersAndStaff,
  selectRecommendations,
  selectReviews,
  selectTopics
} from 'store/anime'
import {
  Character
} from 'interfaces/anime'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Characters = () => {
  const history = useHistory()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)
  const characters = charactersAndStaff.data?.characters
  const staffList = charactersAndStaff.data?.staffList
  const reviews = useSelector(selectReviews)
  const articles = useSelector(selectArticles)
  const topics = useSelector(selectTopics)
  const recommendations = useSelector(selectRecommendations)

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  useEffect(() => {
    if(characters) {
      setFilteredCharacters(
        characters.map(character => ({
          ...character,
          voice_actors: character.voice_actors.filter(voiceActor => voiceActor.language === 'Japanese')
        }))
      )
    }
  }, [characters])


  if(!characters) {
    return null
  }

  if(charactersAndStaff.loading) {
    return <p>loading</p>
  }

  const renderTitle = (type: string) => (
    <Row gutter={32} align='middle' className='mb-3'>
      <Col>
        <Title level={3}>{type.toUpperCase()}</Title>
      </Col>
      <Col flex='auto' className='desktop'>
        <Divider/>
      </Col>
      <Col className='desktop'>
        <Link onClick={() => history.push(`/anime/1/${type}`)} strong>VIEW MORE</Link>
      </Col>
    </Row>
  )

  return (
    <div>
      {renderTitle('characters')}
      <Row gutter={32} className='mb-5'>
        {filteredCharacters.slice(0, 4).map(character => (
          <Col span={12} className='mb-4'>
            <CharactersAndStaffCard character={character}/>
          </Col>
        ))}
      </Row>
      {renderTitle('staff')}
      <Row gutter={32} className='mb-5'>
        {staffList?.slice(0, 4).map(staff => (
          <Col span={12} className='mb-4'>
            <StaffCard staff={staff}/>
          </Col>
        ))}
      </Row>
      {renderTitle('reviews')}
      <Row gutter={32} className='mb-5'>
        {reviews.data?.slice(0, 2).map(review => (
          <Col span={24} className='mb-4'>
            <ReviewCard review={review}/>
          </Col>
        ))}
      </Row>
      {renderTitle('news')}
      <Row gutter={32} className='mb-5'>
        {articles.data?.slice(0, 4).map(article => (
          <Col span={12} className='mb-4'>
            <StoryCard story={article} />
          </Col>
        ))}
      </Row>
      {renderTitle('forums')}
      <Row gutter={32} className='mb-5'>
        {topics.data?.slice(0, 3).map(topic => (
          <Col span={24} className='mb-2'>
            <TopicCard topic={topic} />
          </Col>
        ))}
      </Row>
      {renderTitle('recommendations')}
      <Row gutter={32} className='mb-5'>
        {recommendations.data?.slice(0, 6).map(recommendation => (
          <Col span={4} className='mb-2'>
            <AnimeCard recommendation={recommendation} />
          </Col>
        ))}
      </Row>
    </div>
  ) 
}

export default Characters;
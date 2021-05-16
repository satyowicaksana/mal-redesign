import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag, Divider } from 'antd'

import {
  CharacterCard,
  StaffCard,
  ReviewCard,
  ArticleCard,
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
import { checker } from 'helpers'
import './style.less'
import { useWindowSize } from 'hooks'
import { windowSizes } from 'consts'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Characters = () => {
  const history = useHistory()
  const { width } = useWindowSize()

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

  const renderTitle = (type: string) => (
    <Row gutter={32} align='middle' className='mb-3'>
      <Col>
        <Title level={3}>{type.toUpperCase()}</Title>
      </Col>
      <Col flex='auto'>
        <Divider/>
      </Col>
      <Col>
        <Link onClick={() => history.push(`/anime/1/${type}`)} strong>VIEW MORE</Link>
      </Col>
    </Row>
  )

  return (
    <div>
      {renderTitle('characters')}
      <Row gutter={32} className='mb-5'>
        {charactersAndStaff.data && charactersAndStaff.data.characters.length > 0 && !charactersAndStaff.loading
        ? filteredCharacters.slice(0, 4).map((character, i) => (
          <Col key={i} span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <CharacterCard character={character}/>
          </Col>
        ))
        : Array.from(Array(4).keys()).map((i) => (
          <Col key={i} span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <CharacterCard loading={charactersAndStaff.loading}/>
          </Col>
        ))}
      </Row>
      {renderTitle('staff')}
      <Row gutter={32} className='mb-5'>
        {charactersAndStaff.data && charactersAndStaff.data.characters.length > 0 && !charactersAndStaff.loading
        ? staffList?.slice(0, 4).map(staff => (
          <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <StaffCard staff={staff}/>
          </Col>
        ))
        : Array.from(Array(4).keys()).map((i) => (
          <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <StaffCard loading={charactersAndStaff.loading}/>
          </Col>
        ))}
      </Row>
      {renderTitle('reviews')}
      <div className='mb-5'>
        {checker.isFetched(reviews)
        ? reviews.data.slice(0, 2).map(review => (
          <div className='mb-4 sm-mb-2'>
            <ReviewCard review={review}/>
          </div>
        ))
        : Array.from(Array(2).keys()).map((i) => (
          <div className='mb-4 sm-mb-2'>
            <ReviewCard loading={reviews.loading}/>
          </div>
        ))}
      </div>
      {renderTitle('news')}
      <Row gutter={32} className='mb-5'>
        {checker.isFetched(articles)
        ? articles.data.slice(0, 4).map(article => (
          <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <ArticleCard article={article} />
          </Col>
        ))
        : Array.from(Array(4).keys()).map((i) => (
          <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
            <ArticleCard loading={articles.loading}/>
          </Col>
        ))}
      </Row>
      {renderTitle('forums')}
      <div className='mb-5'>
        {checker.isFetched(topics)
        ? topics.data.slice(0, 3).map(topic => (
            <TopicCard topic={topic} className='mb-4 sm-mb-2'/>
        ))
        : Array.from(Array(3).keys()).map((i) => (
            <TopicCard loading={topics.loading} className='mb-4 sm-mb-2'/>
        ))}
      </div>
      {renderTitle('recommendations')}
      <Row gutter={{xs: 8, sm: 8, md: 32}} className='mb-5'>
        {checker.isFetched(recommendations)
        ? recommendations.data.slice(0, 6).map(recommendation => (
          <Col span={width <= windowSizes.sm.max ? 8 : width <= windowSizes.md.max ? 6 : 4} className='mb-2'>
            <AnimeCard recommendation={recommendation} />
          </Col>
        ))
        : Array.from(Array(6).keys()).map((i) => (
          <Col span={width <= windowSizes.sm.max ? 8 : width <= windowSizes.md.max ? 6 : 4} className='mb-2'>
            <AnimeCard loading={recommendations.loading} />
          </Col>
        ))}
      </Row>
    </div>
  ) 
}

export default Characters;
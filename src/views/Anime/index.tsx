import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'
import { Row, Col, Typography, Button, Table, Menu, Select, Avatar, Tag, Skeleton } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaUser, FaUserCheck, FaTrophy, FaHeart, FaStar } from 'react-icons/fa'

import anime, {
  selectAnime,
  getAnime,
  getCharactersAndStaff,
  getReviews,
  getArticles,
  getTopics,
  getRecommendations
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import {
  Overview,
  Characters,
  Staff,
  Reviews,
  News,
  Forums,
  Recommendations
} from './views'
import './style.less'
import { useWindowSize } from 'hooks'
import { formatter } from 'helpers'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const infoColumnKeys = [
  'type',
  'episodes',
  'status',
  'aired',
  'premiered',
  'broadcast',
  'producers',
  'licensors',
  'studios',
  'source',
  'genres',
  'duration',
  'rating'
]

const Anime = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {id, menu} = useParams<{id: string, menu: string}>()

  const anime = useSelector(selectAnime)

  const infoColumns = infoColumnKeys.map(key => (
    {
      title: `${key.charAt(0).toUpperCase()}${key.slice(1)}`,
      dataIndex: key,
      key,
    }
  ));

  useEffect(() => {
    dispatch(getAnime(id))
    dispatch(getCharactersAndStaff(id))
    dispatch(getReviews(id))
    dispatch(getArticles(id))
    dispatch(getTopics(id))
    dispatch(getRecommendations(id))
  }, [dispatch, id])

  const generateReferenceText = (references: Reference[]) => (<>
    {references.map((reference, i) => (
      <>
      <Link onClick={() => window.open(reference.url, '_blank')}>
        {reference.name}
      </Link>
      {i < references.length - 1 && ', '}
      </>
    ))}
  </>)

  // convert anime object to table dataSource format
  const getAnimeInfoDataSource = () => {
    if(!anime?.data) return {}
    const { aired, producers, licensors, studios, genres } = anime.data
    return {
      ...anime.data,
      aired: aired.string,
      producers: generateReferenceText(producers),
      licensors: generateReferenceText(licensors),
      studios: generateReferenceText(studios),
      genres: generateReferenceText(genres)
    }
  }

  const renderAnimeTitle = () => (
    anime.loading ? (
      <>
        <Skeleton.Button active className='anime-title-skeleton mb-1'/>
        <Skeleton.Button active className='anime-subtitle-skeleton'/>
      </>
    ) : (
      <>
        <Title type='secondary' ellipsis={{rows: 1, tooltip: true}} className='mb-1'>
          {anime.data?.title}
        </Title>
        <Paragraph type='secondary' ellipsis={{rows: 1, tooltip: true}} className='typography-h4'>
          {anime.data?.title_english}
        </Paragraph>
      </>
    )
  )

  const renderActionButtons = () => (
    <Row wrap={false} gutter={{xs: 8, md: 16}}>
      <Col>
        <Button ghost shape='circle' className='button-ghost-warning'>
          <AiOutlinePlus/>
        </Button>
      </Col>
      <Col>
        <Button ghost shape='circle' className='button-ghost-error'>
          <AiOutlineHeart/>
        </Button>
      </Col>
    </Row>
  )

  return (
    <div>
      <div className='anime-banner-image-container'>
        <div className='anime-banner-image-text-container content-container py-4'>
          <Row gutter={16} wrap={false} className='mt-4 mobile'>
            <Col>
              {anime.loading
              ? <Skeleton.Button active className='anime-banner-info-image-skeleton'/>
              : <img src={anime.data?.image_url} alt='' className='anime-banner-info-image'/>
              }
            </Col>
            <Col>
              <Row justify='space-between' className='row-vertical anime-banner-info-image-detail-container'>
                <Col>
                  {renderAnimeTitle()}
                </Col>
                <Col>
                  {renderActionButtons()}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row wrap={false} className='desktop'>
            <Col flex='282px'/>
            <Col flex='auto'>
              <Row gutter={32} wrap={false} align='bottom' justify='space-between'>
                <Col>
                  {renderAnimeTitle()}
                </Col>
                <Col>
                  {renderActionButtons()}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <img src={anime.data?.image_url} alt='' className='anime-banner-image'/>
      </div>
      <div className='anime-banner-info-container py-4'>
        <div className='content-container'>
          <Row wrap={false} className='mb-5'>
            <Col flex='282px' className='desktop'>
              {anime.loading
              ? <Skeleton.Button active className='anime-banner-info-image-skeleton'/>
              : <img src={anime.data?.image_url} alt='' className='anime-banner-info-image'/>
              }
            </Col>
            <Col flex='auto'>
              <Row justify='space-between' className='mb-2'>
                <Col>
                  <Title level={4} className='desktop'>Synopsis</Title>
                  <Tag color='warning' className='mobile'><Title><FaStar/> {anime.data?.score}</Title></Tag>
                </Col>
                {!anime.loading && (
                  <Col>
                    <Row gutter={16}>
                      <Col>
                        <Text strong><FaTrophy className='color-warning'/> #{anime.data?.rank}</Text>
                      </Col>
                      <Col>
                        <Text strong><FaHeart className='color-error'/> #{anime.data?.popularity}</Text>
                      </Col>
                      <Col>
                        <Text strong><FaUser className='color-success'/> {anime.data?.members.toLocaleString()}</Text>
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
              <Title level={4} className='mobile mb-1'>Synopsis</Title>
              {anime.loading
              ? <Skeleton active paragraph={{rows: 1}}/>
              : <Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'More'}} className='anime-banner-info-synopsis'>
                  {anime.data?.synopsis}
                </Paragraph>
              }
            </Col>
          </Row>
          <Row gutter={24} wrap={false}>
            <Col className='desktop'>
              <div className='anime-banner-info-score-container centered-flex py-1 px-2'>
                <Row align='middle' className='row-vertical'>
                  <Col >
                    <Text strong>SCORE</Text>
                  </Col>
                  <Col>
                    <FaStar className='mobile'/> <Text strong className='anime-banner-info-score'>{anime.data?.score}</Text>
                  </Col>
                  <Col >
                    <Text>{anime.data?.scored_by.toLocaleString()} <FaUserCheck/></Text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col flex='auto'>
              <Table loading={anime.loading} dataSource={[getAnimeInfoDataSource()]} columns={infoColumns} pagination={false} className='anime-banner-info-table overflow-scroll' />
            </Col>
          </Row>
        </div>
      </div>
      <div className='centered-flex pt-4 pb-5'>
        <div className='content-container'>
          <Menu mode='horizontal' selectedKeys={[menu || 'overview']} className='anime-menu mb-5' >
            <Menu.Item key='overview' onClick={() => history.push(`/anime/${id}`)}>OVERVIEW</Menu.Item>
            <Menu.Item key='characters' onClick={() => history.push(`/anime/${id}/characters`)}>CHARACTERS</Menu.Item>
            <Menu.Item key='staff' onClick={() => history.push(`/anime/${id}/staff`)}>STAFF</Menu.Item>
            <Menu.Item key='reviews' onClick={() => history.push(`/anime/${id}/reviews`)}>REVIEWS</Menu.Item>
            <Menu.Item key='news' onClick={() => history.push(`/anime/${id}/news`)}>NEWS</Menu.Item>
            <Menu.Item key='forums' onClick={() => history.push(`/anime/${id}/forums`)}>FORUMS</Menu.Item>
            <Menu.Item key='recommendations' onClick={() => history.push(`/anime/${id}/recommendations`)}>RECOMMENDATIONS</Menu.Item>
          </Menu>
          <Switch>
            <Route exact path='/anime/:id'>
              <Overview/>
            </Route>
            <Route exact path='/anime/:id/characters'>
              <Characters/>
            </Route>
            <Route exact path='/anime/:id/staff'>
              <Staff/>
            </Route>
            <Route exact path='/anime/:id/reviews'>
              <Reviews/>
            </Route>
            <Route exact path='/anime/:id/news'>
              <News/>
            </Route>
            <Route exact path='/anime/:id/forums'>
              <Forums/>
            </Route>
            <Route exact path='/anime/:id/recommendations'>
              <Recommendations/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  ) 
}

export default Anime;
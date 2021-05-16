import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { Row, Col, Form, Input,  Skeleton, Typography } from 'antd';

import {
  BannerCarousel,
  Carousel,
  AnimeCardsSection,
  StoryCardsSection,
  AnimeCard
} from 'components';
import './style.less';
import {
  selectFeaturedNewsList,
  getFeaturedNewsList
} from 'store/news'
import {
  selectAnimes,
  selectTopAiringAnimes,
  getCurrentSeason,
  getTopAiringAnimes,
  getAnimes
} from 'store/anime'
import { useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { checker, formatter } from 'helpers';

const { Title, Link } = Typography

const Home = () => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const [form] = Form.useForm()

  const featuredNewsList = useSelector(selectFeaturedNewsList)
  const animes = useSelector(selectAnimes)
  const topAiringAnimes = useSelector(selectTopAiringAnimes)

  const [carouselCardColumn, setCarouselCardColumn] = useState(6)

  useEffect(() => {
    dispatch(getAnimes(String(history.location.search)))
    return history.listen(() => {
      dispatch(getAnimes(String(history.location.search)))
    })
  }, [history, dispatch])

  return (
    <div>
      <div className='navbar-padding'/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Form form={form} onFinish={values => history.push(`/animes?${formatter.objectToQuery(values)}`)} validateTrigger='onSubmit' className='mb-4'>
            <Row>
              <Col>
                <Form.Item
                  name='q'
                >
                  <Input size='large' placeholder='Search' />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row gutter={{xs: 8, sm: 8, md: 48}} className='mb-5'>
            {checker.isFetched(animes)
            ? animes.data.map(anime => (
              <Col style={{width: '20%'}} className='mb-5'>
                <AnimeCard anime={anime} />
              </Col>
            ))
            : Array.from(Array(15).keys()).map((i) => (
              <Col style={{width: '20%'}} className='mb-5'>
                <AnimeCard loading={animes.loading} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home;
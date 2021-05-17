import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { Row, Col, Form, Input,  Skeleton, Typography, Pagination, Button } from 'antd';

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
import { FaSearch } from 'react-icons/fa';

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
    const params = new URLSearchParams(history.location.search)
    // set form fields initial value from url search params
    form.setFieldsValue({
      q: params.get('q'),
      page: Number(params.get('page')) || 1
    })
    return history.listen(() => {
      dispatch(getAnimes(String(history.location.search)))
    })
  }, [history, dispatch, form])

  const handlePaginationChange = (page: number) => {
    form.setFields([{
      name: 'page',
      value: page
    }])
    form.submit()
  }

  const handleValuesChange = () => {
    form.setFields([{
      name: 'page',
      value: 1
    }])
    form.submit()
  }

  return (
    <div>
      <div className='navbar-padding'/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Row wrap={false} gutter={40}>
            <Col>
              <Form form={form} onValuesChange={handleValuesChange} onFinish={values => history.push(`/animes?${formatter.objectToQuery(values)}`)} className='mb-4'>
                <Title level={5} className='mb-1'>Search</Title>
                <Form.Item
                  name='q'
                >
                  <Input prefix={<FaSearch className='mr-1'/>} />
                </Form.Item>
                <Form.Item
                  name='page'
                  className='hidden'
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className='hidden'
                >
                    <Button
                      type='primary'
                      size='large'
                      htmlType='submit'
                    >
                      CREATE ACCOUNT
                    </Button>
                  </Form.Item>
              </Form>
            </Col>
            <Col flex='auto'>
              <Row gutter={{xs: 8, sm: 8, md: 24}} className='mb-2'>
                {checker.isFetched(animes)
                ? animes.data.map(anime => (
                  <Col style={{width: '20%'}} className='mb-3'>
                    <AnimeCard anime={anime} />
                  </Col>
                ))
                : Array.from(Array(15).keys()).map((i) => (
                  <Col style={{width: '20%'}} className='mb-5'>
                    <AnimeCard loading={animes.loading} />
                  </Col>
                ))}
              </Row>
              <Pagination
                current={form.getFieldValue('page')}
                pageSize={animes.pagination.pageSize}
                showSizeChanger={false}
                total={animes.pagination.total}
                onChange={handlePaginationChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home;
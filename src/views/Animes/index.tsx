import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { Row, Col, Form, Input,  Skeleton, Typography, Pagination, Button, Select } from 'antd';

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
import { options, windowSizes } from 'consts';
import { checker, formatter } from 'helpers';
import { FaSearch } from 'react-icons/fa';

const { Title, Link } = Typography
const { Option } = Select

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
  const [page, setPage] = useState(1)

  useEffect(() => {
    const params = new URLSearchParams(history.location.search)
    // set form fields initial value from url search params
    form.setFieldsValue({
      q: params.get('q') || '', //@ts-ignore
      genre: params.get('genre')?.split(',').map(genreValue => options.revGenres[genreValue]) || []
    })
    setPage(Number(params.get('page')))
    dispatch(getAnimes(String(history.location.search)))
    return history.listen(() => {
      const params = new URLSearchParams(history.location.search)
      setPage(Number(params.get('page')) || 1) // handle if page reset
      dispatch(getAnimes(String(history.location.search)))
    })
  }, [history, dispatch, form])

  useEffect(() => {
    submitForm(true)
  }, [page])

  const handleChangePagination = (page: number) => {
    setPage(page)
  }

  const submitForm = (resetPage?: boolean) => {
    let values = form.getFieldsValue()
    if(resetPage) {
      values.page = 1
    }

    if(values.genre) { //convert genre from label to value
      //@ts-ignore to ignore genreLabel type
      values.genre = values.genre.map((genreLabel) => options.genres[genreLabel]) 
    }

    history.push(`/animes?${formatter.objectToQuery(values)}`)
  }

  return (
    <div>
      <div className='navbar-padding'/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Row wrap={false} gutter={40}>
            <Col>
              <Form form={form} onFinish={() => submitForm()} className='mb-4'>
                <Title level={5} className='mb-1'>Search</Title>
                <Form.Item
                  name='q'
                  className='mb-2'
                >
                  <Input suffix={<FaSearch onClick={() => form.submit()} className='clickable'/>} />
                </Form.Item>
                <Title level={5} className='mb-1'>Genres</Title>
                <Form.Item
                  name='genre'
                >
                  <Select
                    allowClear
                    mode='multiple'
                    style={{ width: '200px'}}
                    onChange={() => form.submit()}
                  >
                    {Object.entries(options.genres).map((genre, i) => (
                      <Option key={i} value={genre[0]}>{genre[0]}</Option>
                    ))}
                  </Select>
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
              <Row justify='end' className='mb-5'>
                <Col>
                  <Pagination
                    current={page}
                    pageSize={animes.pagination.pageSize}
                    disabled={animes.loading}
                    showSizeChanger={false}
                    total={animes.pagination.total}
                    onChange={handleChangePagination}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home;
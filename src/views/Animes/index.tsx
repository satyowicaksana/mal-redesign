import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import { Row, Col, Form, Input,  Skeleton, Typography, Pagination, Button, Select, Slider, Tag, DatePicker } from 'antd';
import moment from 'moment'

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
import { FaSearch, FaStar, FaStarAndCrescent } from 'react-icons/fa';

const { Title, Link } = Typography
const { Option } = Select

const Home = () => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const [form] = Form.useForm()

  const animes = useSelector(selectAnimes)
  const [page, setPage] = useState(0)

  //convert query to jikan api query format
  const getApiQuery = () => {
    const params = new URLSearchParams(history.location.search)
    let queryObj: any = {}
    if(params.get('search')) queryObj.q = params.get('search')
    if(params.get('genre')) queryObj.genre = params.get('genre')
    if(params.get('format')) queryObj.type = params.get('format')
    if(params.get('score')) queryObj.score = params.get('score')
    if(params.get('year')) queryObj.start_date = `${params.get('year')}-01-01`
    return formatter.objectToQuery(queryObj)
  }

  useEffect(() => {
    const params = new URLSearchParams(history.location.search)
    // set form fields initial value from url search params
    form.setFieldsValue({
      search: params.get('search') || '', //@ts-ignore
      genre: params.get('genre')?.split(',').map(genreValue => options.revGenres[genreValue]) || [], //@ts-ignore
      type: params.get('format')?.split(',').map(formatValue => options.revFormats[formatValue]) || [],
      score: params.get('score')?.split(',') || [0, 10]
    })
    setPage(Number(params.get('page')))
    dispatch(getAnimes(getApiQuery()))
    return history.listen(() => {
      const params = new URLSearchParams(history.location.search)
      dispatch(getAnimes(getApiQuery()))
    })
  }, [history, dispatch, form])

  useEffect(() => {
    if(page) {
      submitForm(page)
    }
  }, [page])

  const handleChangePagination = (page: number) => {
    setPage(page)
  }

  const submitForm = (newPage?: number) => {
    let values = form.getFieldsValue()
    values.page = newPage || 1

    if(values.genre) { //convert genre from label to value
      //@ts-ignore to ignore mapped type
      values.genre = values.genre.map((genreLabel) => options.genres[genreLabel]) 
    }

    if(values.format) { //convert format from label to value
      //@ts-ignore to ignore mapped format
      values.format = values.format.map((formatLabel) => options.formats[formatLabel]) 
    }

    // clear values with default value
    if(values.page === 1) delete values.page
    if(values.score.join(',') === '0,10') delete values.score
    if(values.year) {
      values.year = moment(values.year).format('yyyy')
    }

    history.push(`/animes?${formatter.objectToQuery(values)}`)
  }

  const handleValuesChangeForm = (changedValues: any) => {
    if(!changedValues.search) { // prevent search change to submit form
      submitForm()
    }
  }

  return (
    <div>
      <div className='navbar-padding'/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Row wrap={false} gutter={40}>
            <Col>
              <Form form={form} onValuesChange={handleValuesChangeForm} onFinish={() => submitForm()} className='mb-4'>
                <Title level={5} className='mb-1'>Search</Title>
                <Form.Item
                  name='search'
                  className='mb-2'
                >
                  <Input suffix={<FaSearch onClick={() => submitForm()} className='clickable'/>} />
                </Form.Item>
                <Title level={5} className='mb-1'>Genres</Title>
                <Form.Item
                  name='genre'
                  className='mb-2'
                >
                  <Select
                    allowClear
                    mode='multiple'
                    style={{ width: '200px'}}
                  >
                    {Object.entries(options.genres).map((genre, i) => (
                      <Option key={i} value={genre[0]}>{genre[0]}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Title level={5} className='mb-1'>Format</Title>
                <Form.Item
                  name='format'
                  className='mb-2'
                >
                  <Select
                    allowClear
                    mode='multiple'
                    style={{ width: '200px'}}
                  >
                    {Object.entries(options.formats).map((format, i) => (
                      <Option key={i} value={format[0]}>{format[0]}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Title level={5} className='mb-1'>Score</Title>
                <Form.Item
                  name='score'
                  className='mb-2'
                >
                  <Slider range defaultValue={[0, 10]} min={0} max={10}/>
                </Form.Item>
                <Title level={5} className='mb-1'>Year</Title>
                <Form.Item
                  name='year'
                >
                  <DatePicker picker="year" placeholder='' />
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
                    current={page || 1}
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
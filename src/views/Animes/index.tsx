import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { Row, Col, Form, Input,  Typography, Pagination, Button, Select, Slider, DatePicker } from 'antd';
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import moment from 'moment'

import {
  AnimeCard
} from 'components';
import './style.less';
import {
  selectAnimes,
  getAnimes
} from 'store/anime'
import { useWindowSize } from 'hooks';
import { options, windowSizes } from 'consts';
import { checker, formatter } from 'helpers';
import { noResultIllustration } from 'assets/images';

const { Title, Text } = Typography
const { Option } = Select

const Home = () => {
  const history = useHistory()
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
    queryObj.order_by = params.get('sort') || 'score' // default value
    if(params.get('page')) queryObj.page = params.get('page')
    if(params.get('genre')) queryObj.genre = params.get('genre')
    if(params.get('format')) queryObj.type = params.get('format')
    if(params.get('score')) queryObj.score = params.get('score')
    if(params.get('year')) {
      queryObj.start_date = `${params.get('year')}-01-01`
      queryObj.end_date = `${params.get('year')}-12-31`
    }
    queryObj.sort = params.get('order') || 'asc'
    // default value
    queryObj.limit = 20
    // handle sort score order
    if(queryObj.order_by === 'score') {
      if(queryObj.sort === 'desc') queryObj.sort = 'asc'
      else queryObj.sort = 'desc'
    } 
    return formatter.objectToQuery(queryObj)
  }

  const setFormValuesByParams = () => {
    const params = new URLSearchParams(history.location.search)
    // set form fields initial value from url search params
    form.setFieldsValue({
      search: params.get('search') || '', //@ts-ignore
      genre: params.get('genre')?.split(',').map(genreValue => options.revGenres[genreValue]) || [], //@ts-ignore
      type: params.get('format')?.split(',').map(formatValue => options.revFormats[formatValue]) || [],
      score: params.get('score'), //@ts-ignore
      sort: options.revSorts[params.get('sort') || 'score'],
      order: params.get('order') === 'desc' ? params.get('order') : 'asc'
    })
    if(params.get('page')) setPage(Number(params.get('page')))
  }

  useEffect(() => { 
    setFormValuesByParams()
    dispatch(getAnimes(getApiQuery()))
    return history.listen(() => {
      dispatch(getAnimes(getApiQuery()))
    })
    /* eslint-disable */
  }, [history, dispatch, form])


  const handleChangePagination = (page: number) => {
    setPage(page)
    submitForm(page)
  }

  const submitForm = (newPage?: number) => {
    let values = form.getFieldsValue()
    values.page = newPage || 1

    if(values.genre) { //@ts-ignore convert genre from label to value
      values.genre = values.genre.map((genreLabel) => options.genres[genreLabel]) 
    }

    if(values.format) { //@ts-ignore convert format from label to value
      values.format = values.format.map((formatLabel) => options.formats[formatLabel]) 
    }

    if(values.sort) { //@ts-ignore convert sort from label to value
      values.sort = options.sorts[values.sort]
    }

    // clear values with default value
    if(values.page === 1) delete values.page
    if(values.score === 0) delete values.score
    if(values.year) {
      values.year = moment(values.year).format('yyyy')
    }
    if(values.sort === 'score') delete values.sort
    if(values.order === 'asc') delete values.order

    history.push(`/animes?${formatter.objectToQuery(values)}`)
  }

  const handleValuesChangeForm = (changedValues: any) => {
    if(!changedValues.search && changedValues.search !== '') { // prevent search change to submit form
      submitForm()
    }
  }

  const handleResetSearch = () => {
    history.push('/animes')
    form.resetFields()
    form.setFieldsValue({
      sort: options.revSorts.score
    })
  }

  const handleClickOrder = () => {
    if(form.getFieldValue('order') === 'asc') {
      form.setFieldsValue({
        order: 'desc'
      })
    } else {
      form.setFieldsValue({
        order: 'asc'
      })
    }
    form.submit()
  }

  const handleSubmitSearch = () => {
    if(form.getFieldValue('search').length >= 3) {
      form.setFieldsValue({
        sort: options.revSorts.title
      })
      form.submit()
    }
  }

  return (
    <div>
      <div className='navbar-background'/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <Form form={form} onValuesChange={handleValuesChangeForm} onFinish={() => submitForm()} className='mb-4'>
            <Row gutter={40} className='mb-1' justify='space-between'>
              <Col xs={12} md={5}>
                <Title level={5} className='mb-1'>Search</Title>
                <Form.Item
                  name='search'
                  className='mb-2'
                >
                  <Input onKeyDown={e => e.key === 'Enter' && handleSubmitSearch()} suffix={<FaSearch onClick={handleSubmitSearch} className='clickable'/>} />
                </Form.Item>
              </Col>
              <Col>
                <Title level={5} className='mb-1'>Sort By</Title>
                <Row align='middle' gutter={16}>
                  <Col>
                    <Form.Item
                      name='sort'
                    >
                      <Select>
                        {Object.entries(options.sorts).map((sort, i) => (
                          <Option key={i} value={sort[0]}>{sort[0]}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col onClick={handleClickOrder} className='clickable'>
                    <Form.Item
                      name='order'
                      className='hidden'
                    >
                      <Input />
                    </Form.Item>
                    {form.getFieldValue('order') === 'asc'
                    ? <FaSortAmountUp/>
                    : <FaSortAmountDown/>
                    }
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={40}>
              <Col xs={24} md={5} className='animes-filter-container overflow-scroll sm-mb-5'>
                  <div className='sm-mr-2'>
                    <Title level={5} className='mb-1'>Genres</Title>
                    <Form.Item
                      name='genre'
                      className='mb-2'
                    >
                      <Select
                        allowClear
                        mode='multiple'
                      >
                        {Object.entries(options.genres).map((genre, i) => (
                          <Option key={i} value={genre[0]}>{genre[0]}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div className='sm-mr-2'>
                    <Title level={5} className='mb-1'>Format</Title>
                    <Form.Item
                      name='format'
                      className='mb-2'
                    >
                      <Select
                        allowClear
                        mode='multiple'
                      >
                        {Object.entries(options.formats).map((format, i) => (
                          <Option key={i} value={format[0]}>{format[0]}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div className='sm-mr-2'>
                    <Title level={5} className='mb-1'>Score</Title>
                    <Form.Item
                      name='score'
                      className='mb-2'
                    >
                      <Slider className='slider-reverse' min={0} max={10}/>
                    </Form.Item>
                  </div>
                  <div className='sm-mr-2'>
                    <Title level={5} className='mb-1'>Year</Title>
                    <Form.Item
                      name='year'
                    >
                      <DatePicker picker="year" placeholder='' disabledDate={current => current < moment('01-01-1940') || current > moment()} />
                    </Form.Item>
                  </div>
              </Col>
              <Col flex='auto'>
                <Row gutter={24} className='mb-2'>
                  {checker.isFetched(animes)
                  ? animes.data.map(anime => (
                    <Col style={{width: width > windowSizes.md.max ? '20%' : width > windowSizes.sm.max ? '25%' : '50%'}} className='mb-3'>
                      <AnimeCard anime={anime} />
                    </Col>
                  ))
                  : animes.loading
                  ? Array.from(Array(15).keys()).map((i) => (
                    <Col style={{width: width > windowSizes.md.max ? '20%' : width > windowSizes.sm.max ? '25%' : '50%'}} className='mb-5'>
                      <AnimeCard loading={animes.loading} />
                    </Col>
                  ))
                  : <div className='no-result-illustration-container'>
                      <Text className='typography-fade mb-2'>No result found...</Text>
                      <img src={noResultIllustration} alt='' className='mb-2'/>
                      <Button onClick={handleResetSearch} type='primary'>Reset Search</Button>
                  </div>
                }
                </Row>
                {animes.data.length > 0 && (
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
                )}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Home;
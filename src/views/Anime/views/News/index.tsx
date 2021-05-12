import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  ArticleCard
} from 'components'
import {
  selectArticles,
  getArticles
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'

const News = () => {
  const articles = useSelector(selectArticles)

  useEffect(() => {
    console.log(articles)
  }, [articles])

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  if(articles.loading) {
    return <p>loading</p>
  }

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < articles.data.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= articles.data.length ? totalShowedCharacters + 12 : articles.data.length)
        }, 500)}
        threshold={50}
      >
        <Row gutter={32}>
          {articles.data.slice(0, totalShowedCharacters).map(article => (
            <Col span={12} className='mb-4'>
              <ArticleCard article={article} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default News;
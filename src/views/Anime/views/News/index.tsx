import { useState } from 'react'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Spin } from 'antd'

import {
  ArticleCard
} from 'components'
import {
  selectArticles
} from 'store/anime'
import './style.less'
import { checker } from 'helpers'
import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'

const News = () => {
  const articles = useSelector(selectArticles)
  const { width } = useWindowSize()

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

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
          {checker.isFetched(articles)
          ? articles.data.slice(0, 4).map(article => (
            <Col key={article.url} span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <ArticleCard article={article} />
            </Col>
          ))
          : Array.from(Array(4).keys()).map((i) => (
            <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <ArticleCard loading={articles.loading}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default News;
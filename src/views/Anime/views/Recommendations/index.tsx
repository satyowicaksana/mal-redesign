import { useState } from 'react'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Spin } from 'antd'

import {
  AnimeCard
} from 'components'
import {
  selectRecommendations
} from 'store/anime'
import './style.less'
import { useWindowSize } from 'hooks'
import { checker } from 'helpers'
import { windowSizes } from 'consts'

const Recommendations = () => {
  const { width } = useWindowSize()

  const recommendations = useSelector(selectRecommendations)

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < recommendations.data.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= recommendations.data.length ? totalShowedCharacters + 12 : recommendations.data.length)
        }, 500)}
        threshold={50}
      >
        <Row gutter={{xs: 8, sm: 8, md: 32}} className='mb-5'>
          {checker.isFetched(recommendations)
          ? recommendations.data.slice(0, totalShowedCharacters).map(recommendation => (
            <Col key={recommendation.mal_id} span={width <= windowSizes.sm.max ? 8 : width <= windowSizes.md.max ? 6 : 4} className='mb-2'>
              <AnimeCard recommendation={recommendation} />
            </Col>
          ))
          : Array.from(Array(6).keys()).map(i => (
            <Col key={i} span={width <= windowSizes.sm.max ? 8 : width <= windowSizes.md.max ? 6 : 4} className='mb-2'>
              <AnimeCard loading={recommendations.loading} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Recommendations;
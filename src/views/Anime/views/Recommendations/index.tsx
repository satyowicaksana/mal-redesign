import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  AnimeCard,
  TopicCard
} from 'components'
import {
  selectRecommendations,
  getRecommendations
} from 'store/anime'
import {
  Anime,
  Recommendation,
  Reference
} from 'interfaces/anime'
import './style.less'
import { useWindowSize } from 'hooks'
import { checker } from 'helpers'
import { windowSizes } from 'consts'

const Recommendations = () => {
  const dispatch = useDispatch()
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
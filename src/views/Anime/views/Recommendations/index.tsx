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

const Recommendations = () => {
  const dispatch = useDispatch()

  const recommendations = useSelector(selectRecommendations)

  useEffect(() => {
    console.log(recommendations)
  }, [recommendations])

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  if(recommendations.loading) {
    return <p>loading</p>
  }

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
        <Row gutter={32}>
          {recommendations.data.slice(0, totalShowedCharacters).map(recommendation => (
            <Col span={4} className='mb-4'>
              <AnimeCard recommendation={recommendation}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Recommendations;
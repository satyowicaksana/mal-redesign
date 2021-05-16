import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  TopicCard
} from 'components'
import {
  selectTopics,
  getTopics
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'
import { checker } from 'helpers'

const Forums = () => {

  const topics = useSelector(selectTopics)

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < topics.data.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= topics.data.length ? totalShowedCharacters + 12 : topics.data.length)
        }, 500)}
        threshold={50}
      >
        {checker.isFetched(topics)
        ? topics.data.slice(0, totalShowedCharacters).map(topic => (
            <TopicCard topic={topic} className='mb-4 sm-mb-2'/>
        ))
        : Array.from(Array(3).keys()).map((i) => (
            <TopicCard loading={topics.loading} className='mb-4 sm-mb-2'/>
        ))}
      </InfiniteScroll>
    </div>
  ) 
}

export default Forums;
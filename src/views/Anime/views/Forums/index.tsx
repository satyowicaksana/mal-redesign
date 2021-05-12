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

const Forums = () => {

  const topics = useSelector(selectTopics)

  useEffect(() => {
    console.log(topics)
  }, [topics])

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  if(topics.loading) {
    return <p>loading</p>
  }

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
          {topics.data.slice(0, totalShowedCharacters).map(topic => (
              <TopicCard topic={topic} className='mb-2'/>
          ))}
      </InfiniteScroll>
    </div>
  ) 
}

export default Forums;
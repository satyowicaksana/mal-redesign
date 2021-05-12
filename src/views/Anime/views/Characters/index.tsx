import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  CharacterCard
} from 'components'
import {
  selectCharactersAndStaff,
  getCharactersAndStaff
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Characters = () => {
  const dispatch = useDispatch()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)

  useEffect(() => {
    dispatch(getCharactersAndStaff("1"))
  }, [dispatch])

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  const characters = charactersAndStaff.data?.characters

  if(!characters) {
    return null
  }

  if(charactersAndStaff.loading) {
    return <p>loading</p>
  }

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < characters.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= characters.length ? totalShowedCharacters + 12 : characters.length)
        }, 500)}
        threshold={50}
      >
        <Row gutter={32}>
          {characters.slice(0, totalShowedCharacters).map(character => (
            <Col span={12} className='mb-4'>
              <CharacterCard character={character}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Characters;
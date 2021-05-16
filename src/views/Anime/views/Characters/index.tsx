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
  Character,
  Reference
} from 'interfaces/anime'
import './style.less'
import { useWindowSize } from 'hooks'
import { windowSizes } from 'consts'

const Characters = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const characters = charactersAndStaff.data?.characters

  useEffect(() => {
    dispatch(getCharactersAndStaff("1"))
  }, [dispatch])

  useEffect(() => {
    if(characters) {
      setFilteredCharacters(
        characters.map(character => ({
          ...character,
          voice_actors: character.voice_actors.filter(voiceActor => voiceActor.language === 'Japanese')
        }))
      )
    }
  }, [characters])

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < filteredCharacters.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= filteredCharacters.length ? totalShowedCharacters + 12 : filteredCharacters.length)
        }, 500)}
        threshold={50}
      >
        <Row gutter={32}>
          {charactersAndStaff.data && charactersAndStaff.data.characters.length > 0 && !charactersAndStaff.loading
          ? filteredCharacters.slice(0, totalShowedCharacters).map((character, i) => (
            <Col key={i} span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <CharacterCard character={character}/>
            </Col>
          ))
          : Array.from(Array(4).keys()).map((i) => (
            <Col key={i} span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <CharacterCard loading={charactersAndStaff.loading}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Characters;
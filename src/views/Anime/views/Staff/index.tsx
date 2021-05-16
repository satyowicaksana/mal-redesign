import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Row, Col, Typography, Spin, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  StaffCard
} from 'components'
import {
  selectCharactersAndStaff,
  getCharactersAndStaff
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'
import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Staff = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  const staffList = charactersAndStaff.data?.staffList
  
  return (
    <div>
      <InfiniteScroll
        hasMore={staffList && totalShowedCharacters < staffList.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(staffList ? totalShowedCharacters + 12 <= staffList.length ? totalShowedCharacters + 12 : staffList.length : 0)
        }, 500)}
        threshold={50}
      >
        <Row gutter={32}>
          {charactersAndStaff.data && charactersAndStaff.data.characters.length > 0 && !charactersAndStaff.loading
          ? staffList?.slice(0, totalShowedCharacters).map(staff => (
            <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <StaffCard staff={staff}/>
            </Col>
          ))
          : Array.from(Array(4).keys()).map((i) => (
            <Col span={width <= windowSizes.md.max ? 24 : 12} className='mb-4 sm-mb-2'>
              <StaffCard loading={charactersAndStaff.loading}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Staff;
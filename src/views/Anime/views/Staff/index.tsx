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

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Staff = () => {
  const dispatch = useDispatch()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)

  useEffect(() => {
    dispatch(getCharactersAndStaff("1"))
  }, [dispatch])

  useEffect(() => {
    console.log(charactersAndStaff)
  }, [charactersAndStaff])

  const [totalShowedCharacters, setTotalShowedCharacters] = useState(12)

  const staffList = charactersAndStaff.data?.staffList

  if(!staffList) {
    return null
  }

  if(charactersAndStaff.loading) {
    return <p>loading</p>
  }

  return (
    <div>
      <InfiniteScroll
        hasMore={totalShowedCharacters < staffList.length}
        loader={<div className='centered-flex'>
          <Spin />
        </div>}
        loadMore={() => setTimeout(() => {
          setTotalShowedCharacters(totalShowedCharacters + 12 <= staffList.length ? totalShowedCharacters + 12 : staffList.length)
        }, 500)}
        threshold={50}
      >
        <Row gutter={32}>
          {staffList.slice(0, totalShowedCharacters).map(staff => (
            <Col span={12} className='mb-4'>
              <StaffCard staff={staff}/>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </div>
  ) 
}

export default Staff;
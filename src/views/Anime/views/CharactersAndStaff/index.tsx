import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

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

const CharactersAndStaff = () => {
  const dispatch = useDispatch()

  const charactersAndStaff = useSelector(selectCharactersAndStaff)
  const characters = charactersAndStaff.data?.characters
  const staff = charactersAndStaff.data?.staff

  useEffect(() => {
    dispatch(getCharactersAndStaff("1"))
  }, [dispatch])
  useEffect(() => {
    console.log('charactersAndStaff', charactersAndStaff)
  }, [charactersAndStaff])

  return (
    <div>
      {JSON.stringify(charactersAndStaff)}
    </div>
  ) 
}

export default CharactersAndStaff;
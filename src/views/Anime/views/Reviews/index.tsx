import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Typography, Button, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import {
  selectReviews,
  getReviews
} from 'store/anime'
import {
  Reference
} from 'interfaces/anime'
import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const Reviews = () => {
  const dispatch = useDispatch()

  const reviews = useSelector(selectReviews)

  useEffect(() => {
    dispatch(getReviews("1"))
  }, [dispatch])
  useEffect(() => {
    console.log('reviews', reviews)
  }, [reviews])

  return (
    <div>
      {JSON.stringify(reviews)}
    </div>
  ) 
}

export default Reviews;
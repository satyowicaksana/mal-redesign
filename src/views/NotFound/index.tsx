import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {
  BannerCarousel,
  Carousel,
  AnimeCardsSection,
  StoryCardsSection,
  AnimeCard
} from 'components';
import './style.less';
import {
  selectFeaturedNewsList,
  getFeaturedNewsList
} from 'store/news'
import {
  selectCurrentSeason,
  selectTopAiringAnimes,
  getCurrentSeason,
  getTopAiringAnimes
} from 'store/anime'
import { Button, Col, Divider, Row, Skeleton, Typography } from 'antd';
import { useWindowSize } from 'hooks';
import { options, windowSizes } from 'consts';
import { noResultIllustration } from 'assets/images';

const { Title, Text } = Typography

const NotFound = () => {
  const history = useHistory()
  
  return (
    <>
      <div className='navbar-background'/>
      <div className='not-found-container centered-flex py-5'>
        <Title className='color-primary mb-2'>404 Not Found</Title>
        <img src={noResultIllustration} alt='' className='mb-2'/>
        <Text className='typography-block typography-fade mb-2'>This page doesn't exist.</Text>
        <Button onClick={() => history.push('/')} type='primary'>Back to Home</Button>
      </div>
    </>
  )
}

export default NotFound;
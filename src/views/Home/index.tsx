import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

import {
  BannerCarousel,
  Carousel,
  AnimeCard,
  ArticleCard
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
import { Col, Divider, notification, Row, Skeleton, Typography } from 'antd';
import { useWindowSize } from 'hooks';
import { windowSizes } from 'consts';
import { checker } from 'helpers';

const { Title, Link } = Typography

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { width } = useWindowSize()

  const featuredNewsList = useSelector(selectFeaturedNewsList)
  const currentSeason = useSelector(selectCurrentSeason)
  const topAiringAnimes = useSelector(selectTopAiringAnimes)

  const [carouselCardColumn, setCarouselCardColumn] = useState(6)

  useEffect(() => {
    dispatch(getFeaturedNewsList())
    dispatch(getCurrentSeason())
    dispatch(getTopAiringAnimes())
  }, [dispatch])

  // show notification if news fetch error
  useEffect(() => {
    if(featuredNewsList.error) {
      notification.error({
        message: 'Failed to fetch news. Please try again.'
      })
    }
  }, [featuredNewsList.error])

  useEffect(() => {
    if(width <= windowSizes.lg.max) {
      setCarouselCardColumn(4);
      return
    }
    setCarouselCardColumn(6);
  }, [width])

  return (
    <div>
      <BannerCarousel
        loading={featuredNewsList.loading}
        newsList={featuredNewsList.data || []}
      />
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <div className='mb-5'>
            <Row gutter={{xs: 0, md: 32}} align='middle' className='mb-3'>
              <Col>
                <Title level={3}>{currentSeason.data?.season_name} {currentSeason.data?.season_year} Anime</Title>
              </Col>
              <Col flex='auto' className='desktop'>
                <Divider/>
              </Col>
              <Col className='desktop'>
                <Link onClick={() => history.push('/animes')} strong>VIEW MORE</Link>
              </Col>
            </Row>
            {width <= windowSizes.md.max ? (
              <div className='anime-cards-section-swiper'>
                {currentSeason.loading
                ? Array.from(Array(6).keys()).map(i => 
                    <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                      <Skeleton.Button key={i} active className='skeleton-anime-card'/>
                    </div>
                  )
                : currentSeason.data?.anime.map((anime, i) => 
                    <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                      <AnimeCard
                        onClick={() => history.push(`/anime/${anime.mal_id}`)}
                        seasonAnime={anime}
                      />
                    </div>
                  )}
              </div>
            ) : (
              <Carousel
                dots={false}
                showArrows={!currentSeason.loading}
                className='anime-cards-section-carousel mb-1'
              >
                { Array.from(Array(Math.ceil((currentSeason.loading ? 6 : currentSeason.data?.anime.length || 0) / 6)).keys()).map(i => (
                  <div key={i}>
                    <Row gutter={carouselCardColumn * 6} className='anime-cards-section-slide'>
                      { Array.from(Array(carouselCardColumn).keys()).map(j => (
                        <Col key={`${i}${j}`} span={24 / carouselCardColumn}>
                          {currentSeason.loading
                          ? <Skeleton.Button active key={i} className='skeleton-anime-card'/>
                          : currentSeason.data?.anime[i * carouselCardColumn + j]
                          && <AnimeCard
                              onClick={() => history.push(`/anime/${currentSeason.data?.anime[i * carouselCardColumn + j].mal_id}`)}
                              seasonAnime={currentSeason.data?.anime[i * carouselCardColumn + j]}
                            />}
                        </Col>
                      )) }
                    </Row>
                  </div>
                )) }
              </Carousel>
            )}
            <Row justify='end' className='mobile mt-2'>
              <Col>
                <Link onClick={() => history.push('/animes')} strong>VIEW MORE</Link>
              </Col>
            </Row>
          </div>
          <div className='mb-5'>
            <Row gutter={{xs: 0, md: 32}} align='middle' className='mb-3'>
              <Col>
                <Title level={3}>Top Airing Anime</Title>
              </Col>
              <Col flex='auto' className='desktop'>
                <Divider/>
              </Col>
              <Col className='desktop'>
                <Link onClick={() => history.push('/animes')} strong>VIEW MORE</Link>
              </Col>
            </Row>
            {width <= windowSizes.md.max ? (
              <div className='anime-cards-section-swiper'>
                {topAiringAnimes.loading
                ? Array.from(Array(6).keys()).map(i => 
                    <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                      <Skeleton.Button key={i} active className='skeleton-anime-card'/>
                    </div>
                  )
                : topAiringAnimes.data?.map((anime, i) => 
                    <div key={i} className='anime-cards-section-swiper-card-container mr-2'>
                      <AnimeCard
                        onClick={() => history.push(`/anime/${anime.mal_id}`)}
                        topAiringAnime={anime}
                      />
                    </div>
                  )}
              </div>
            ) : (
              <Carousel
                dots={false}
                showArrows={!topAiringAnimes.loading}
                className='anime-cards-section-carousel mb-1'
              >
                { Array.from(Array(Math.ceil((topAiringAnimes.loading ? 6 : topAiringAnimes.data?.length || 0) / 6)).keys()).map(i => (
                  <div key={i}>
                    <Row gutter={carouselCardColumn * 6} className='anime-cards-section-slide'>
                      { Array.from(Array(carouselCardColumn).keys()).map(j => (
                        <Col key={`${i}${j}`} span={24 / carouselCardColumn}>
                          {topAiringAnimes.loading
                          ? <Skeleton.Button active key={i} className='skeleton-anime-card'/>
                          : topAiringAnimes.data[i * carouselCardColumn + j]
                          && <AnimeCard
                              onClick={() => history.push(`/anime/${topAiringAnimes.data[i * carouselCardColumn + j].mal_id}`)}
                              topAiringAnime={topAiringAnimes.data[i * carouselCardColumn + j]}
                            />}
                        </Col>
                      )) }
                    </Row>
                  </div>
                )) }
              </Carousel>
            )}
            <Row justify='end' className='mobile mt-2'>
              <Col>
                <Link onClick={() => history.push('/animes')} strong>VIEW MORE</Link>
              </Col>
            </Row>
          </div>
          <div className='mb-5'>
            <Row gutter={{xs: 0, md: 32}} align='middle' className='mb-3'>
              <Col>
                <Title level={3}>Anime & Manga News</Title>
              </Col>
              <Col flex='auto' className='desktop'>
                <Divider/>
              </Col>
              <Col className='desktop'>
                <Link href='https://myanimelist.net/news' target='_blank' strong>VIEW MORE</Link>
              </Col>
            </Row>
            <Row gutter={[{ md: 24, xl: 40 }, { xs: 8, sm: 8, md: 24, xl: 40 }]}>
              {checker.isFetched(featuredNewsList)
              ? featuredNewsList.data.map((news, i) => (
                  <Col key={i} xs={24} lg={12}>
                    <ArticleCard
                      onClick={() => window.open(news.link, '_blank')}
                      news={news}
                    />
                  </Col>
                )) 
              : Array.from(Array(4).keys()).map(i => (
                <Col key={i} xs={24} lg={12}>
                  <ArticleCard
                    loading={featuredNewsList.loading}
                  />
                </Col>
              ))}
            </Row>
            <Row justify='end' className='mobile mt-2'>
              <Col>
                <Link href='https://myanimelist.net/news' target='_blank' strong>VIEW MORE</Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
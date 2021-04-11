import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  BannerCarousel,
  AnimeCardsSection,
  StoryCardsSection,
  Footer
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

const Home = () => {
  const dispatch = useDispatch()

  const featuredNewsList = useSelector(selectFeaturedNewsList)
  const currentSeason = useSelector(selectCurrentSeason)
  const topAiringAnimes = useSelector(selectTopAiringAnimes)

  useEffect(() => {
    dispatch(getFeaturedNewsList())
    dispatch(getCurrentSeason())
    dispatch(getTopAiringAnimes())
  }, [dispatch])

  return (
    <div>
      <BannerCarousel newsList={featuredNewsList.data || []}/>
      <div className='centered-flex'>
        <div className='content-container py-5'>
          <AnimeCardsSection
            title={currentSeason.data ? `${currentSeason.data.season_name} ${currentSeason.data.season_year} Anime` : ''}
            animes={currentSeason.data?.anime || []}
            loading={currentSeason.loading}
          />
          <AnimeCardsSection
            title='Top Airing Anime'
            animes={topAiringAnimes.data}
            loading={topAiringAnimes.loading}
          />
          <StoryCardsSection
            stories={featuredNewsList.data || []}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
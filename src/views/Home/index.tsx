import {
  BannerCarousel,
  AnimeCardsSection,
  StoryCardsSection,
  Footer
} from 'components';
import './style.less';

const featuredNews = [
  {
    imagePath: 'https://media.comicbook.com/2020/09/edens-zero-anime-poster-hiro-mashima-fairy-tail-creator-1238508-1280x0.jpeg',
    title: `Edens Zero Anime's Video Reveals More Cast, T.M.Revolution Song, Netflix 2021 Streaming`,
    description: 'Sayaka Ohara, Houchu Ohtsuka, Kikuko Inoue join cast; CHICO with Honeyworks perform ending'
  },
  {
    imagePath: 'https://cdn.animenewsnetwork.com/thumbnails/max650x650/cms/news.4/170552/madoka-magica-10.jpg',
    title: 'Madoka Magica Anime Gets 10th Anniversary Event on April 25',
    description: `Director Junichirō Taniguchi's 10th anniversary illustration unveiled`,
  },
  {
    imagePath: 'https://cdn.trinikid.com/109514/uploads/7a192750-f68a-11ea-9adf-d9b634015f55_800_420.jpeg',
    title: `A Tale of Two Redheads: Yona vs. Shirayuki`,
    description: 'Making comparisons amongst different facets of popular anime is a fun little exercise I like to engage with occasionally, especially when certain trends end up getting clustered together. In one such instance back in 2015, we coincidentally saw two different anime adaptations of shoujo manga with red-haired female protagonists in fantasy settings, and the general similarities continue well beyond that point, so today, I wanted to take a closer look at Yona from Yona of the Dawn and Shirayuki from Snow White with the Red Hair to see how they compare and what makes they work within their respective stories.'
  },
]

const animes = [
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  },
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  },
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  },
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  },
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  },
  {
    title: 'Attack On Titan: Final Season',
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
  },
  {
    title: `The Promised Neverland: Season 2`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg'
  }
]

const stories = [
  {
    title: `'100-man no Inochi no Ue ni Ore wa Tatteiru' 2nd Season Reveals Supporting Cast, Promo`,
    description: `The official website of the 100-man no Inochi no Ue ni Ore wa Tatteiru (I'm Standing on a Million Lives) anime series revealed four supporting cast, ending theme performer, and a promotional video for the second season on Friday. The new season will..`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
    date: new Date()
  },
  {
    title: `'100-man no Inochi no Ue ni Ore wa Tatteiru' 2nd Season Reveals Supporting Cast, Promo`,
    description: `The official website of the 100-man no Inochi no Ue ni Ore wa Tatteiru (I'm Standing on a Million Lives) anime series revealed four supporting cast, ending theme performer, and a promotional video for the second season on Friday. The new season will..`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
    date: new Date()
  },
  {
    title: `'100-man no Inochi no Ue ni Ore wa Tatteiru' 2nd Season Reveals Supporting Cast, Promo`,
    description: `The official website of the 100-man no Inochi no Ue ni Ore wa Tatteiru (I'm Standing on a Million Lives) anime series revealed four supporting cast, ending theme performer, and a promotional video for the second season on Friday. The new season will..`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
    date: new Date()
  },
  {
    title: `'100-man no Inochi no Ue ni Ore wa Tatteiru' 2nd Season Reveals Supporting Cast, Promo`,
    description: `The official website of the 100-man no Inochi no Ue ni Ore wa Tatteiru (I'm Standing on a Million Lives) anime series revealed four supporting cast, ending theme performer, and a promotional video for the second season on Friday. The new season will..`,
    imagePath: 'https://cdn.myanimelist.net/images/anime/1815/110626.jpg',
    date: new Date()
  }
]

const Home = () => {
  return (
    <div>
      <BannerCarousel items={featuredNews}/>
      <div className='centered-flex'>
        <div className='content-container py-5 px-2'>
          <AnimeCardsSection
            animes={animes}
          />
          <AnimeCardsSection
            animes={animes}
          />
          <StoryCardsSection
            stories={stories}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
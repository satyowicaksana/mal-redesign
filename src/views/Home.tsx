import Carousel from 'components/Carousel';
import './Home.less';

const featuredNews = [
  'gas1',
  'gas2'
]

const Home = () => {
  return (
    <div>
      <div className='home-header-section'>
        <div className='content-container home-carousel-container'>
          <Carousel items={featuredNews}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
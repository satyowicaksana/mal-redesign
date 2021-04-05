import { Typography } from 'antd';

import { Anime } from 'interfaces/anime'
import './style.less';

const { Text } = Typography;

type AnimeCardProps = {
  anime: Anime
}

const AnimeCard = ({
  anime
}: AnimeCardProps) => {
  return (
    <div className='anime-card'>
      <img src={anime.image_url} alt='' className='anime-card-image'/>
      <div className='anime-card-title-container py-1 px-2'>
        <Text strong className='anime-card-title'>{anime.title}</Text>
      </div>
    </div>
  );
}

export default AnimeCard;
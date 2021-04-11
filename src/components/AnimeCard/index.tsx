import { HTMLAttributes } from 'react'
import { Typography } from 'antd';

import { Anime } from 'interfaces/anime'
import './style.less';

const { Text } = Typography;

interface AnimeCardProps extends HTMLAttributes<HTMLDivElement> {
  anime: Anime
}

const AnimeCard = ({
  anime,
  ...props
}: AnimeCardProps) => {
  return (
    <div {...props} className='anime-card'>
      <img src={anime.image_url} alt='' className='anime-card-image'/>
      <div className='anime-card-title-container py-1 px-2'>
        <Text strong className='anime-card-title'>{anime.title}</Text>
      </div>
    </div>
  );
}

export default AnimeCard;
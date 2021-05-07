import { HTMLAttributes } from 'react'
import { Typography } from 'antd';
import { FaUserCheck } from 'react-icons/fa'

import { Anime, Recommendation } from 'interfaces/anime'
import './style.less';

const { Text } = Typography;

interface AnimeCardProps extends HTMLAttributes<HTMLDivElement> {
  anime?: Anime
  recommendation?: Recommendation
}

const AnimeCard = ({
  anime,
  recommendation,
  ...props
}: AnimeCardProps) => {
  return (
    <div {...props} className='anime-card'>
      <img src={anime?.image_url || recommendation?.image_url} alt='' className='anime-card-image'/>
      {recommendation &&
        <div className='anime-card-icon-container p-1'>
          <Text type='secondary'><FaUserCheck/> {recommendation?.recommendation_count}</Text>
        </div>
      }
      <div className='anime-card-title-container p-1'>
        <Text strong className='anime-card-title'>{anime?.title || recommendation?.title}</Text>
      </div>
    </div>
  );
}

export default AnimeCard;
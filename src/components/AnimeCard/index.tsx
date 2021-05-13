import { HTMLAttributes } from 'react'
import { Skeleton, Typography } from 'antd';
import { FaUserCheck } from 'react-icons/fa'

import { Anime, Recommendation } from 'interfaces/anime'
import './style.less';

const { Text, Paragraph } = Typography;

interface AnimeCardProps extends HTMLAttributes<HTMLDivElement> {
  anime?: Anime
  recommendation?: Recommendation
  loading?: boolean
}

const AnimeCard = ({
  anime,
  recommendation,
  loading,
  ...props
}: AnimeCardProps) => {

  if(!anime && !recommendation) return (
    <div {...props} className='anime-card no-pointer'>
      <Skeleton.Button active={loading} className='skeleton-stretch anime-card-skeleton'/>
    </div>
  )

  return (
    <div {...props} className='anime-card'>
      <img src={anime?.image_url || recommendation?.image_url} alt='' className='anime-card-image'/>
      {recommendation &&
        <div className='anime-card-icon-container p-1'>
          <Text type='secondary'><FaUserCheck/> {recommendation?.recommendation_count}</Text>
        </div>
      }
      <div className='anime-card-title-container p-1'>
        <Paragraph strong className='anime-card-title' ellipsis >{anime?.title || recommendation?.title}</Paragraph>
      </div>
    </div>
  );
}

export default AnimeCard;
import { Typography } from 'antd';

import './style.less';

const { Text } = Typography;

type AnimeCardProps = {
  anime: {
    title: string;
    imagePath: string;
  }
}

const AnimeCard = ({
  anime
}: AnimeCardProps) => {
  return (
    <div className='anime-card'>
      <img src={anime.imagePath} alt='' className='anime-card-image'/>
      <div className='anime-card-title-container py-1 px-2'>
        <Text strong className='anime-card-title'>{anime.title}</Text>
      </div>
    </div>
  );
}

export default AnimeCard;
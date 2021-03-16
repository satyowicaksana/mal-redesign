import { Typography } from 'antd';

import './AnimeCard.less';

const { Text } = Typography;

type AnimeCardProps = {
  title: string;
  imagePath: string;
}

const AnimeCard = ({
  title,
  imagePath
}: AnimeCardProps) => {
  return (
    <div className='anime-card'>
      <img src={imagePath} alt='' className='anime-card-image'/>
      <div className='anime-card-title-container py-1 px-2'>
        <Text strong>{title}</Text>
      </div>
    </div>
  );
}

export default AnimeCard;
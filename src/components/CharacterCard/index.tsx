import { HTMLAttributes } from 'react';
import { Row, Col, Typography, Skeleton } from 'antd';

import { Character } from 'interfaces/anime'
import './style.less';

const { Text, Link } = Typography;

interface CharacterCardProps extends HTMLAttributes<HTMLDivElement> {
  character?: Character
  loading?: boolean
}

const CharacterCard = ({
  character,
  loading,
  ...props
}: CharacterCardProps) => {

  if(!character) {
    return (
      <Row {...props} className='character-card'>
        <Col xs={8} md={4}>
          <Skeleton.Button active={loading} className='skeleton-stretch'/>
        </Col>
        <Col span={16} className='p-2'>
          <Skeleton active={loading} paragraph={{rows: 1}}/>
        </Col>
        <Col xs={8} md={4}>
          <Skeleton.Button active={loading} className='skeleton-stretch'/>
        </Col>
      </Row>
    );
  }

  const getLargeVoiceActorImage = () => {
    const splittedUrl = character.voice_actors[0].image_url.split("/")
    splittedUrl.splice(3, 2)
    return splittedUrl.join('/').split('?')[0]
  }

  const hasRightSection = character.voice_actors[0]

  return (
    <Row {...props} className='character-card'>
      <Col xs={8} md={4}>
        <img src={character.image_url} alt='' className='character-card-image'/>
      </Col>
      <Col span={16} className='character-card-info-container p-2'>
        <Row gutter={8} justify='space-between' wrap={false}>
          <Col span={12}>
            <Link strong onClick={() => window.open(character.url)}>{character.name}</Link>
            <Text className='typography-block'>{character.role}</Text>
          </Col>
          {hasRightSection && (
            <Col span={12} className='character-card-voice-actor-name-container'>
              <Link strong onClick={() => window.open(character.voice_actors[0].url)}>{character.voice_actors[0].name}</Link>
              <Text className='typography-block'>{character.voice_actors[0].language}</Text>
            </Col>
          )}
        </Row>
      </Col>
      {hasRightSection && (
        <Col xs={8} md={4}>
          <img src={getLargeVoiceActorImage()} alt='' className='character-card-image'/>
        </Col>
      )}
    </Row>
  );
}

export default CharacterCard;
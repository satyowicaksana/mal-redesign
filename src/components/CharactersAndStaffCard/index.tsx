import { HTMLAttributes } from 'react';
import { Row, Col, Typography } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa'

import { windowSizes } from 'consts'
import { useWindowSize } from 'hooks'
import { Character, Staff } from 'interfaces/anime'
import './style.less';

const { Text, Link } = Typography;

interface CharactersAndStaffCardProps extends HTMLAttributes<HTMLDivElement> {
  character: Character
}

const CharactersAndStaffCard = ({
  character,
  ...props
}: CharactersAndStaffCardProps) => {

  const getLargeVoiceActorImage = () => {
    const splittedUrl = character.voice_actors[0].image_url.split("/")
    splittedUrl.splice(3, 2)
    return splittedUrl.join('/').split('?')[0]
  }

  const hasRightSection = character.voice_actors[0]

  return (
    <Row {...props} className='characters-and-staff-card'>
      <Col xs={8} md={4}>
        <img src={character.image_url} alt='' className='story-card-image'/>
      </Col>
      <Col span={16} className='story-card-info-container p-2'>
        <Row gutter={8} justify='space-between' wrap={false}>
          <Col span={12}>
            <Link strong onClick={() => window.open(character.url)}>{character.name}</Link>
            <Text className='typography-block'>{character.role}</Text>
          </Col>
          {hasRightSection && (
            <Col span={12} className='characters-and-staff-card-voice-actor-name-container'>
              <Link strong onClick={() => window.open(character.voice_actors[0].url)}>{character.voice_actors[0].name}</Link>
              <Text className='typography-block'>{character.voice_actors[0].language}</Text>
            </Col>
          )}
        </Row>
      </Col>
      {hasRightSection && (
        <Col xs={8} md={4}>
          <img src={getLargeVoiceActorImage()} alt='' className='story-card-image'/>
        </Col>
      )}
    </Row>
  );
}

export default CharactersAndStaffCard;
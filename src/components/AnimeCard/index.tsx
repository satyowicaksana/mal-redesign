import { HTMLAttributes, useState } from 'react'
import { Skeleton, Typography, Popover, Row, Col, Tag } from 'antd';
import { FaHeart, FaStar, FaTrophy, FaUser, FaUserCheck } from 'react-icons/fa'

import { Anime, Recommendation, SeasonAnime } from 'interfaces/anime'
import { styler } from 'helpers'
import './style.less';

const { Text, Paragraph, Title, Link } = Typography;

interface AnimeCardProps extends HTMLAttributes<HTMLDivElement> {
  seasonAnime?: SeasonAnime
  recommendation?: Recommendation
  loading?: boolean
}

const AnimeCard = ({
  seasonAnime,
  recommendation,
  loading,
  ...props
}: AnimeCardProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  if(!seasonAnime && !recommendation) return (
    <div {...props} className='anime-card no-pointer'>
      <Skeleton.Button active={loading} className='skeleton-stretch anime-card-skeleton'/>
    </div>
  )

  const renderPopoverContent = () => {
    if(seasonAnime) {
      return (
        <div className='anime-card-popover-container p-2'>
          <Row gutter={16} justify='space-between' wrap={false} className='mb-1'>
            <Col>
              <Title level={5}>{seasonAnime.title}</Title>
            </Col>
            <Col>
              <Tag color={styler.getScoreColor(seasonAnime.score)}><FaStar/> {seasonAnime.score}</Tag>
            </Col>
          </Row>
          {seasonAnime.producers[0] && <Link strong>{seasonAnime.producers[0].name.toUpperCase()}</Link>}
          {seasonAnime.episodes && <div><Text className='typography-fade'>{seasonAnime.episodes} episodes</Text></div>}
          {seasonAnime.genres
          && <Row gutter={8} className='mt-1'>
              {seasonAnime.genres.map((genre, i) => (
                <Col key={i} className='mb-1'>
                  <Tag color='blue' className='clickable'>{genre.name}</Tag>
                </Col>
              ))}
            </Row>}
          <div className='anime-card-popover-synopsis-container mb-1'>
            <Paragraph>{seasonAnime.synopsis}</Paragraph>
          </div>
          <Row justify='end'>
            <Col>
              <Link className='typography-small' strong>VIEW DETAIL</Link>
            </Col>
          </Row>
        </div>
      )
    }
  }

  return (
    <Popover onVisibleChange={visible => setPopoverOpen(visible)} placement='rightTop' content={renderPopoverContent()}>
      <div {...props} className={`anime-card ${popoverOpen ? 'hovered' : ''}`}>
        <img src={seasonAnime?.image_url || recommendation?.image_url} alt='' className='anime-card-image'/>
        {recommendation &&
          <div className='anime-card-icon-container p-1'>
            <Text type='secondary'><FaUserCheck/> {recommendation?.recommendation_count}</Text>
          </div>
        }
        <div className='anime-card-title-container-blur'/>
        <div className='anime-card-title-container p-1'>
          <Paragraph strong className='anime-card-title' ellipsis >{seasonAnime?.title || recommendation?.title}</Paragraph>
        </div>
      </div>
    </Popover>
  );
}

export default AnimeCard;
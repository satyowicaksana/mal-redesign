import { HTMLAttributes, useState } from 'react'
import { Skeleton, Typography, Popover, Row, Col, Tag } from 'antd';
import { FaStar, FaUserCheck } from 'react-icons/fa'

import { Recommendation, SearchedAnime, SeasonAnime, TopAiringAnime } from 'interfaces/anime'
import { styler } from 'helpers'
import './style.less';
import { useHistory } from 'react-router';
import { useWindowSize } from 'hooks';
import { windowSizes } from 'consts';

const { Text, Paragraph, Title, Link } = Typography;

interface AnimeCardProps extends HTMLAttributes<HTMLDivElement> {
  anime?: SearchedAnime
  seasonAnime?: SeasonAnime
  topAiringAnime?: TopAiringAnime
  recommendation?: Recommendation
  loading?: boolean
}

const AnimeCard = ({
  anime,
  seasonAnime,
  topAiringAnime,
  recommendation,
  loading,
  ...props
}: AnimeCardProps) => {
  const history = useHistory()
  const { width } = useWindowSize()
  const [popoverOpen, setPopoverOpen] = useState(false)

  if(!anime && !seasonAnime && !topAiringAnime && !recommendation) return (
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
              <Link onClick={() => history.push(`/anime/${seasonAnime.mal_id}`)} className='typography-small' strong>VIEW DETAIL</Link>
            </Col>
          </Row>
        </div>
      )
    }
    if(topAiringAnime) {
      return (
        <div className='anime-card-popover-container p-2'>
          <Row gutter={16} justify='space-between' wrap={false} className='mb-1'>
            <Col>
              <Title level={5}>{topAiringAnime.title}</Title>
            </Col>
            <Col>
              <Tag color={styler.getScoreColor(topAiringAnime.score)}><FaStar/> {topAiringAnime.score}</Tag>
            </Col>
          </Row>
          {/*{topAiringAnime.producers[0] && <Link strong>{topAiringAnime.producers[0].name.toUpperCase()}</Link>}*/}
          {topAiringAnime.start_date && <div className='mb-1'><Tag color='blue'>{topAiringAnime.start_date}</Tag></div>}
          {topAiringAnime.episodes && <div><Text className='typography-fade'>{topAiringAnime.episodes} episodes</Text></div>}
          {/*{topAiringAnime.genres
          && <Row gutter={8} className='mt-1'>
              {topAiringAnime.genres.map((genre, i) => (
                <Col key={i} className='mb-1'>
                  <Tag color='blue' className='clickable'>{genre.name}</Tag>
                </Col>
              ))}
            </Row>}
          <div className='anime-card-popover-synopsis-container mb-1'>
            <Paragraph>{topAiringAnime.synopsis}</Paragraph>
          </div>*/}
          <Row justify='end'>
            <Col>
              <Link onClick={() => history.push(`/anime/${topAiringAnime.mal_id}`)} className='typography-small' strong>VIEW DETAIL</Link>
            </Col>
          </Row>
        </div>
      )
    }
    if(recommendation) {
      return (
        <div className='anime-card-popover-container p-2'>
          <Title level={5} className='mb-1'>{recommendation.title}</Title>
          <Row align='middle' gutter={8}>
            <Col>
              <Tag color='success'><Text><FaUserCheck/> {recommendation.recommendation_count}</Text></Tag>
            </Col>
            <Col>
              <Link onClick={() => history.push(`/anime/${recommendation.mal_id}`)}  className='typography-small'>VIEW DETAIL</Link>
            </Col>
          </Row>
        </div>
      )
    }
  }

  const renderCard = () => (
    <div {...props} className={`anime-card ${popoverOpen ? 'hovered' : ''}`}>
      <img src={anime?.image_url || seasonAnime?.image_url || topAiringAnime?.image_url || recommendation?.image_url} alt='' className={`anime-card-image ${anime?.rated === 'Rx' ? 'r-18' : ''}`}/>
      {anime?.rated === 'Rx' && <div className='anime-card-r-18-logo'>
        <Title>R18</Title>
      </div>}
      <div className='anime-card-title-container-blur'/>
      <div className='anime-card-title-container p-1'>
        <Paragraph strong className='anime-card-title' ellipsis >{anime?.title || seasonAnime?.title || topAiringAnime?.title || recommendation?.title}</Paragraph>
      </div>
    </div>
  )

  if(width > windowSizes.md.max) return (
    <Popover onVisibleChange={visible => setPopoverOpen(visible)} placement='rightTop' content={renderPopoverContent()}>
      {renderCard()}
    </Popover>
  );

  return renderCard()
}

export default AnimeCard;
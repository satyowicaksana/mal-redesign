import { Row, Col, Typography } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa'

import { windowSizes } from 'consts'
import { useWindowSize } from 'helpers/hooks'
import './StoryCard.less';

const { Title, Text } = Typography;

type StoryCardProps = {
  story: {
    title: string;
    description: string;
    imagePath: string;
    date: Date;
  }
}

const StoryCard = ({
  story
}: StoryCardProps) => {
  const { imagePath } = story;

  const { width } = useWindowSize();

  return (
    <Row className='story-card'>
      <Col xs={8} md={12}>
        <img src={imagePath} alt='' className='story-card-image'/>
      </Col>
      <Col xs={16} md={12} className='story-card-info-container p-2'>
        <Title level={4} ellipsis={{rows: width < windowSizes.md.min ? 3 : 4}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Title>
        <Row gutter={4}>
          <Col className='centered-flex'>
            <FaRegCalendarAlt className='story-card-calendar-icon'/>
          </Col>
          <Col>
            <Text>12/03/2021</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default StoryCard;
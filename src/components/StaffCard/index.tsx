import { HTMLAttributes } from 'react';
import { Row, Col, Typography, Skeleton } from 'antd';

import { Staff } from 'interfaces/anime'
import './style.less';

const { Text, Link, Paragraph } = Typography;

interface StaffCardProps extends HTMLAttributes<HTMLDivElement> {
  staff?: Staff
  loading?: boolean
}

const StaffCard = ({
  staff,
  loading,
  ...props
}: StaffCardProps) => {

  if(!staff) return (
    <Row {...props} className='staff-card'>
      <Col span={4}>
        <Skeleton.Button active={loading} className='skeleton-stretch'/>
      </Col>
      <Col span={20} className='staff-card-info-container p-2'>
        <Skeleton active={loading} paragraph={{rows: 1}}/>
      </Col>
    </Row>
  );

  return (
    <Row {...props} className='staff-card'>
      <Col span={4}>
        <img src={staff.image_url} alt='' className='staff-card-image'/>
      </Col>
      <Col span={20} className='staff-card-info-container p-2'>
        <Paragraph ellipsis={{rows: 1}}>
          <Link strong onClick={() => window.open(staff.url)}>{staff.name}</Link>
        </Paragraph>
        <Text className='typography-block'>{staff.positions.join(', ')}</Text>
      </Col>
    </Row>
  );
}

export default StaffCard;
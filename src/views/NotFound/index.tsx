import { useHistory } from 'react-router';
import { Button, Typography } from 'antd';

import './style.less';
import { noResultIllustration } from 'assets/images';

const { Title, Text } = Typography

const NotFound = () => {
  const history = useHistory()
  
  return (
    <>
      <div className='navbar-background'/>
      <div className='not-found-container centered-flex py-5'>
        <Title className='color-primary mb-2'>404 Not Found</Title>
        <img src={noResultIllustration} alt='' className='mb-2'/>
        <Text className='typography-block typography-fade mb-2'>This page doesn't exist.</Text>
        <Button onClick={() => history.push('/')} type='primary'>Back to Home</Button>
      </div>
    </>
  )
}

export default NotFound;
import { Row, Col, Typography, Button } from 'antd'
import { AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'

import './style.less'

const { Title, Text, Paragraph } = Typography

const Anime = () => {

  return (
    <div>
      <div className='anime-banner-image-container'>
        <div className='anime-banner-image-text-container content-container py-4'>
          <Row>
            <Col flex='282px'/>
            <Col flex='auto'>
              <Row align='bottom' justify='space-between'>
                <Col>
                  <Title type='secondary' className='mb-1'>
                    Jujutsu Kaisen
                  </Title>
                  <Text type='secondary' className='anime-banner-image-subtitle'>
                    Jujutsu Kaisen
                  </Text>
                </Col>
                <Col>
                  <Row gutter={16}>
                    <Col>
                      <Button ghost shape='circle'>
                        <AiOutlinePlus/>
                      </Button>
                    </Col>
                    <Col>
                      <Button ghost shape='circle'>
                        <AiOutlineHeart/>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <img src="https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg" alt='' className='anime-banner-image'/>
      </div>
      <div className='anime-banner-info-container py-4'>
        <div className='content-container'>
          <Row wrap={false} gutter={50}>
            <Col flex='282px'>
              <img src="https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg" alt='' className='anime-banner-info-image'/>
            </Col>
            <Col flex='auto'>
              <Row justify='space-between' className='mb-2'>
                <Col>
                  <Title level={4} type='secondary'>Synopsis</Title>
                </Col>
                <Col>
                  <Row gutter={16}>
                    <Col>
                      <Text type='secondary' strong>Ranked: </Text><Text type='secondary'>#4165</Text>
                    </Col>
                    <Col>
                      <Text type='secondary' strong>Popularity: </Text><Text type='secondary'>#3031</Text>
                    </Col>
                    <Col>
                      <Text type='secondary' strong>Members: </Text><Text type='secondary'>27,456</Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'More'}} type='secondary'>
                Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj
                Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj Sed ut perspiciatis undeeijwdiojdoiwjed weiojdowjeodioewdnweiodiojwed iowjedojwodjoiwjd wioedjiowjd oieidojew ewojdopjweodew wioejdojewkendowdj
              </Paragraph>
            </Col>
          </Row>
          <Row wrap={false}>
            <Col>
              <div className='anime-banner-info-score-container p-1'>
                <Row align='middle' className='row-vertical'>
                  <Col>
                    <Text strong type='secondary'>SCORE</Text>
                  </Col>
                  <Col>
                    <Text strong type='secondary' className='anime-banner-info-score'>6.86</Text>
                  </Col>
                  <Col>
                    <Text type='secondary'>1,432 users</Text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className='anime-banner-info-card'>
                <Row gutter={16}>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                  <Col className='p-1'>
                    <Text type='secondary' strong>Sdwidjiowjed: </Text><Text type='secondary'>deiowdjw</Text>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  ) 
}

export default Anime;
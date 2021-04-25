import { Row, Col, Typography, Button, Table, Menu, Select, Avatar, Tag } from 'antd'
import { AiOutlinePlus, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

import './style.less'

const { Title, Text, Paragraph, Link } = Typography
const { Option } = Select

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    key1: '1',
    name1: 'Mike',
    age1: 32,
    address1: '10 Downing Street'
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

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
                  <Text type='secondary' className='typography-h4'>
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
          <Row wrap={false} gutter={50} className='mb-4'>
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
          <Row gutter={24} wrap={false}>
            <Col>
              <div className='anime-banner-info-score-container centered-flex p-1'>
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
            <Col flex='auto'>
              <Table dataSource={dataSource} columns={columns} pagination={false} className='anime-banner-info-table overflow-scroll' />
            </Col>
          </Row>
        </div>
      </div>
      <div className='centered-flex pt-4 pb-5'>
        <div className='content-container'>
          <Menu mode='horizontal' className='anime-menu mb-5'>
            <Menu.Item>VIDEOS</Menu.Item>
            <Menu.Item>VIDEOS</Menu.Item>
            <Menu.Item>VIDEOS</Menu.Item>
            <Menu.Item>VIDEOS</Menu.Item>
            <Menu.Item>VIDEOS</Menu.Item>
            <Menu.Item>VIDEOS</Menu.Item>
          </Menu>
          <Row gutter={16} justify='end' className='mb-2'>
            <Col>
              <Row gutter={8} align='middle'>
                <Col>
                  <Text>Sort by:</Text>
                </Col>
                <Col>
                  <Select defaultValue="Recent">
                    <Option value="Recent">Recent</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button type='default'>WRITE REVIEW</Button>
            </Col>
          </Row>
          <Row gutter={16} wrap={false}>
            <Col className='anime-review-reviewer-profile-container'>
             <Avatar src='https://static.wikia.nocookie.net/boruto/images/9/9d/375px-NarutoBorutoMovie.jpg/revision/latest/top-crop/width/360/height/450?cb=20200121144920' size='large' className='mb-1'/>
             <Link className='anime-review-reviewer-name typography-block typography-small'>Naruto Uzumaki</Link>
            </Col>
            <Col flex='auto'>
              <div className='anime-review-item-arrow'/>
              <div className='anime-review-item-container p-2'>
                <Row justify='space-between' wrap={false} className='mb-1'>
                  <Col>
                    <Row gutter={8} wrap={false}>
                      <Col>
                        <Tag color='orange'>
                          <Row gutter={4} wrap={false} align='middle'>
                            <Col>
                              <Title type='secondary' level={4} className='centered-flex'><AiFillStar/></Title>
                            </Col>
                            <Col>
                              <Title type='secondary' level={4}>10</Title>
                            </Col>
                          </Row>
                        </Tag>
                      </Col>
                      <Col>
                        <Text strong className='typography-fade typography-block'>16 Oct, 2021</Text>
                        <Text className='typography-fade typography-block typography-small'>1 of 1 episodes seen</Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Title level={5}>
                      <Row gutter={4} align='middle' wrap={false}>
                        <Col>
                          <Text className='typography-fade centered-flex'><FaArrowAltCircleUp/></Text>
                        </Col>
                        <Col>
                          <Text>123</Text>
                        </Col>
                        <Col className='centered-flex'>
                          <Text className='typography-fade centered-flex'><FaArrowAltCircleDown/></Text>
                        </Col>
                      </Row>
                    </Title>
                  </Col>
                </Row>
                <Title level={4}>Best Anime Ever Best Anime Ever Best Anime Ever Best Anime Ever  Best Anime Ever Best Anime Ever Best Anim</Title>
                <Paragraph ellipsis={{rows: 4, expandable: true, symbol: 'More'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  ) 
}

export default Anime;
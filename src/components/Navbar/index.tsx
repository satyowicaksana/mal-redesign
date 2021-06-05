import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Typography, Popover, Input, Button, Form, Drawer, Collapse } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';

import { LoginModal } from 'components'
import { useScroll } from 'hooks'
import './style.less';

const { Title, Text, Link } = Typography
const { Panel } = Collapse

const links = [
  {
    text: 'ANIME',
    subLinks: [
      {
        text: 'Anime Search',
        link: 'https://myanimelist.net/anime.php'
      },
      {
        text: 'Top Anime',
        link: 'https://myanimelist.net/topanime.php'
      },
      {
        text: 'Seasonal Anime',
        link: 'https://myanimelist.net/anime/season'
      }
    ]
  },
  {
    text: 'COMMUNITY',
    subLinks: [
      {
        text: 'Forums',
        link: 'https://myanimelist.net/forum'
      },
      {
        text: 'Clubs',
        link: 'https://myanimelist.net/clubs.php'
      },
      {
        text: 'Blogs',
        link: 'https://myanimelist.net/blog.php'
      }
    ]
  },
  {
    text: 'INDUSTRY',
    subLinks: [
      {
        text: 'News',
        link: 'https://myanimelist.net/news'
      },
      {
        text: 'Featured Articles',
        link: 'https://myanimelist.net/featured'
      },
      {
        text: 'People',
        link: 'https://myanimelist.net/people.php'
      }
    ]
  },
  {
    text: 'HELP',
    subLinks: [
      {
        text: 'About',
        link: 'https://myanimelist.net/about.php'
      },
      {
        text: 'Support',
        link: 'https://myanimelist.net/about.php?go=support'
      }
    ]
  }
]

const Navbar = () => {
  const history = useHistory()
  const [form] = Form.useForm()

  const [search, setSearch] = useState('')
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  const { scrollY, scrollDirection } = useScroll();

  const handleFinishSearch = (values: any) => {
    if(values.search.length >= 3) {
      history.push(`/animes?search=${values.search}&sort=title`)
    }
  }
  return (
    <>
    <div className={`navbar-wrapper ${scrollY > 1 ? `bg-primary ${scrollDirection === 'down' ? 'hide' : ''}` : ''} py-2`}>
      <div className='content-container'>
        <Row align='middle' justify='space-between'>
          <Col onClick={() => history.push('/')} className='clickable'>
            <Title type='secondary' level={3} className='navbar-logo'>MyAnimeList</Title>
          </Col>
          <Col className='desktop'>
            <Row gutter={16} align='middle'>
              { links.map((link, i) => (
                <Popover
                  key={i}
                  placement='bottomLeft'
                  content={
                    <div className='py-2'>
                      {link.subLinks.map(subLink => (
                        <div key={subLink.text} onClick={() => window.open(subLink.link, '_blank')} className='navbar-popover-option-container py-1 px-3'>
                          <Text>{subLink.text}</Text>
                        </div>
                      ))}
                    </div>
                  }
                >
                  <Col>
                    <Link type='secondary' strong>{link.text}</Link>
                  </Col>
                </Popover>
              )) }
              <Col>
                <Form form={form} onFinish={handleFinishSearch}>
                  <Form.Item
                    name='search'
                  >
                    <Input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      suffix={<FaSearch className='navbar-search-icon'/>}
                      className={`navbar-search ${search ? 'expanded' : ''}`}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col>
                <Button
                  type='default'
                  icon={<BiLogInCircle className='mr-1'/>}
                  onClick={() => setIsLoginModalVisible(true)}
                >
                  SIGN IN
                </Button>
              </Col>
            </Row>
          </Col>
          <Col onClick={() => setIsDrawerVisible(true)} className='mobile clickable'>
            <Title type='secondary'><FiMenu/></Title>
          </Col>
        </Row>
      </div>
    </div>
    <LoginModal visible={isLoginModalVisible} onCancel={() => setIsLoginModalVisible(false)}/>
    <Drawer
      placement="right"
      closable={false}
      visible={isDrawerVisible}
      onClose={() => setIsDrawerVisible(false)}
    >
      <div className='navbar-drawer-content-container'>
        <Collapse ghost>
          {links.map(link => (
            <Panel header={link.text} key={link.text}>
              {link.subLinks.map(subLink => (
                <Link key={subLink.text} href={subLink.link} className='typography-block mb-2'>{subLink.text}</Link>
              ))}
            </Panel>
          ))}
        </Collapse>
        <div>
          <Button
            type='default'
            icon={<BiLogInCircle className='mr-1'/>}
            onClick={() => setIsLoginModalVisible(true)}
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </Drawer>
  </>
  );
}

export default Navbar;
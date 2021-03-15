import { useState } from 'react';
import { Row, Col, Typography, Popover, Input, Button } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

import './Navbar.less';

const { Title, Text, Link } = Typography;

const links = [
  {
    text: 'ANIME'
  },
  {
    text: 'MANGA'
  },
  {
    text: 'COMMUNITY'
  },
  {
    text: 'INDUSTRY'
  },
  {
    text: 'WATCH'
  },
  {
    text: 'READ'
  },
  {
    text: 'HELP'
  }
]

const Navbar = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='navbar-wrapper py-2'>
      <div className='content-container'>
        <Row align='middle' justify='space-between'>
          <Col>
            <Title type='secondary' level={3} className='navbar-logo'>MyAnimeList</Title>
          </Col>
          <Col>
            <Row gutter={16} align='middle'>
              { links.map((link, i) => (
                <Popover
                  placement='bottomLeft'
                  content={
                    <div className='py-2'>
                      <div className='navbar-popover-option-container py-1 px-3'>
                        <Text>Option</Text>
                      </div>
                      <div className='navbar-popover-option-container py-1 px-3'>
                        <Text>Option Long</Text>
                      </div>
                      <div className='navbar-popover-option-container py-1 px-3'>
                        <Text>Option</Text>
                      </div>
                    </div>
                  }
                >
                  <Col key={i}>
                    <Link type='secondary' strong>{link.text}</Link>
                  </Col>
                </Popover>
              )) }
              <Col>
                <Input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  suffix={<FaSearch className='navbar-search-icon'/>}
                  className={`navbar-search ${search ? 'expanded' : ''}`}
                />
              </Col>
              <Col>
                <Button type='default' icon={<BiLogInCircle className='mr-1'/>}>SIGN IN</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
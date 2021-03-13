import { Row, Col, Typography } from 'antd';
import './Navbar.less';

const { Title, Link } = Typography;

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
  return (
    <div className='navbar-wrapper'>
      <div className='content-container'>
        <Row align='middle' justify='space-between'>
          <Col>
            <Title type='secondary' level={3}>MyAnimeList</Title>
          </Col>
          <Col>
            <Row gutter={16}>
              { links.map((link, i) => (
                <Col key={i}>
                  <Link type='secondary' strong>{link.text}</Link>
                </Col>
              )) }
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
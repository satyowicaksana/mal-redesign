
import { Typography, Row, Col, Divider } from 'antd'
import { ImFacebook2, ImTwitter } from 'react-icons/im'

import { appleStoreBadge, googlePlayBadge } from 'assets/images'
import { linkGroups } from './const'
import './style.less'

const { Text, Link } = Typography

const Footer = () => {

  return (
    <div className='footer-wrapper'>
      <div className='content-container py-4'>
        <Row justify='space-between' className='row-vertical-sm'>
          <Col>
            <Row gutter={[{xs: 0, md: 40}, 16]} className='row-vertical-sm'>
              <Col className='centered-flex-sm'>
                <Text type='secondary' className='footer-logo'>MAL</Text>
              </Col>
              {linkGroups.map((linkGroup, i) => (
                <Col key={i}>
                  <Row gutter={[0,8]} className='row-vertical'>
                    {linkGroup.map((link, i) => (
                      <Col key={i} className='centered-flex-sm'>
                        <Link type='secondary'>{link.text}</Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
          <Divider className='mobile my-4'/>
          <Col>
            <Row gutter={{xs: 0, md: 40}} className='row-vertical-sm'>
              <Col className='centered-flex-sm'>
                <div>
                  <div className='mb-1'>
                    <Text type='secondary' className='typography-fade mb-1'>Follow Us</Text>
                  </div>
                  <Row gutter={16}>
                    <Col>
                      <ImFacebook2 className='footer-social-media-icon'/> 
                    </Col>
                    <Col>
                      <ImTwitter className='footer-social-media-icon'/> 
                    </Col>
                  </Row>
                </div>
              </Col>
              <Divider className='mobile my-4'/>
              <Col className='centered-flex-sm'>
                <div>
                  <div className='mb-1'>
                    <Text type='secondary' className='typography-fade'>Get the App</Text>
                  </div>
                  <div className='mb-1'>
                    <img src={appleStoreBadge} alt='' className='footer-app-download-badge'/>
                  </div>
                  <div>
                    <img src={googlePlayBadge} alt='' className='footer-app-download-badge'/>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider className='my-4'/>
        <div>
          <Text type='secondary' className='typography-fade'>MyAnimeList.net is a property of MyAnimeList Co.,Ltd</Text>
          <br></br>
          <Text type='secondary' className='typography-fade'>©2021 All Rights Reserved.</Text>
        </div>
      </div>
    </div>
  );
}

export default Footer
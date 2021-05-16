import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Typography, Row, Col, Divider, DatePicker, Checkbox } from 'antd'
import { AiOutlineUser, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaArrowLeft, FaArrowAltCircleDown } from 'react-icons/fa'

import { registerIllustration } from 'assets/images'
import { validator } from 'helpers'
import './style.less'

const { Text, Title, Link } = Typography

const Register = () => {
  const history = useHistory()

  const [registerForm] = Form.useForm()

  return (
    <Row wrap={false}>
      <Col flex='480px' className='register-form-container p-5 sm-px-3'>
        <Row justify='space-between' className='row-vertical register-form-content-container'>
          <Col>
            <Row gutter={24} align='middle' className='mb-5'>
              <Col>
                <Title>SIGN UP</Title>
              </Col>
              <Col flex='auto'>
                <Divider/>
              </Col>
            </Row>
            <Form form={registerForm} onFinish={values => alert(JSON.stringify(values))} validateTrigger='onSubmit'>
              <Form.Item
                name='email'
                rules={[{validator: validator.email}]}
                className='mb-2'
              >
                <Input size='large' placeholder='Email' />
              </Form.Item>
              <Form.Item
                name='username'
                help='(Between 2 and 16 characters)'
                className='mb-2'
              >
                <Input size='large' placeholder='Username' />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[{validator: validator.password}]}
                className='mb-2'
              >
                <Input.Password size='large' placeholder='Password' />
              </Form.Item>
              <Form.Item
                name='birthday'
                help='Your birthday won’t be shown publicly by default.'
                className='mb-2'
              >
                <DatePicker size='large' placeholder='Birthday'/>
              </Form.Item>
              <Form.Item
                name='agree'
                className='mb-4'
              >
                <Checkbox>
                  <Text className='typography-small'>I have read and agree to the <Link strong>Term of Service</Link> and <Link strong>Privacy Policy</Link></Text>
                </Checkbox>
              </Form.Item>
              <Row justify='end' className='mb-2'>
                <Col>
                  <Form.Item>
                    <Button
                      type='primary'
                      size='large'
                      htmlType='submit'
                    >
                      CREATE ACCOUNT
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
              <Row justify='end' className='mb-4'>
                <Col>
                  <Text className='typography-fade'>Already have an account? </Text><Link strong onClick={() => history.push('/register')}>Login</Link>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <Link onClick={() => history.goBack()}><FaArrowLeft size={20}/></Link>
          </Col>
        </Row>
      </Col>
      <Col flex='auto' className='register-banner-container'>
        <div className='p-5'>
          <Title className='typography-fade mb-5 register-banner-title'>Start Using MyAnimeList</Title>
          <Title level={5} className='typography-fade register-banner-description'>Join MAL to catalog your anime and manga,</Title>
          <Title level={5} className='typography-fade register-banner-description'>compare with your friends, create your own profile, and plenty more.</Title>
          <Title level={5} className='typography-fade register-banner-description'>It's FREE.</Title>
        </div>
        <img src={registerIllustration} alt='' className='register-illustration'/>
        <div className='register-banner-blur-blob'/>
      </Col>
    </Row>
  )
}

export default Register;
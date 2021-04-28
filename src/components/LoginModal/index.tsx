import { useHistory } from 'react-router-dom'
import { Modal, ModalProps, Typography, Form, Input, Button, Row, Col, Divider } from 'antd';

import { validator } from 'helpers'
import './style.less';

const { Text, Title, Link } = Typography;

interface LoginModalProps extends ModalProps {
}

const LoginModal = ({
  ...props
}: LoginModalProps) => {
  const history = useHistory()

  const [loginForm] = Form.useForm()

  return (
    <Modal {...props}>
      <div className='p-3'>
        <Row align='middle' gutter={24} className='mb-4'>
          <Col>
            <Title>SIGN IN</Title>
          </Col>
          <Col flex='auto'>
            <Divider />
          </Col>
        </Row>
        <Form form={loginForm} onFinish={values => alert(JSON.stringify(values))} validateTrigger='onSubmit'>
          <Form.Item
            name="email"
            rules={[{validator: validator.email}]}
            className='mb-2'
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{validator: validator.password}]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Row justify='end' className='mb-4'>
            <Col>
              <Link className='typography-small'>Forgot password?</Link>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row justify='end' className='mb-1'>
            <Col>
              <Form.Item>
                <Button
                  type="primary"
                  size='large'
                  htmlType="submit"
                >
                  SUBMIT
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row justify='end'>
            <Col>
              <Text className='typography-fade'>Not registered? </Text><Link onClick={() => history.push('/register')}>Create an account</Link>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  )
}

export default LoginModal;
import { Form, Input, Button, Typography } from 'antd'
import { AiOutlineUser, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { FaUserAlt, FaArrowAltCircleDown } from 'react-icons/fa'

import './style.less'

const { Text } = Typography

const Login = () => {
  return (
    <div className='centered-flex'>
      <div className='content-container centered-flex py-5'>
        <div className='login-form-container p-5'>
          <Form>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='Username' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  ) 
}

export default Login;
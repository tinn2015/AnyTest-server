import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd';
import globalStore from '../../store/index'
import { login } from '../../utils/http'

import './index.css'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: ''
    }
  }

  componentDidMount () {
    const { isLogin } = globalStore
    if (isLogin) {
      this.props.history.push('/panel')
    }
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  usernameChange = (e) => {
    const { value } = e.target
    console.log(value, 'change')
    this.setState({
      username: value
    })
  }

  passwordChange = (e) => {
    const { value } = e.target
    this.setState({
      password: value
    })
  }

  submit = (e) => {
    console.log('submit', e, this.state)
    const { username, password } = this.state
    login({
      username,
      password
    }).then((res) => {
      if (res.code === 1) {
        message.success(res.msg)
      }
      console.log(this.props, this.props.history)
      this.props.history.push('/panel')
      console.log('res', res)
    })
  }

  render () {
    return (
      <div className="login wh-full flex jc-c ai-c">
        <div className="content flex jc-c ai-c">
          <Form
            name="basic"
            className="form"
            size="middle"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入" onChange={this.usernameChange}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="请输入密码" onChange={this.passwordChange} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={this.submit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
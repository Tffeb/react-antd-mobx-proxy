import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { reqLogin } from '../../api'
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yzmUrl: 'http://49.234.235.193:8888/api/user/getVerify'
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        reqLogin(values).then(res => {
          console.log('res', res)
          if (res.data.code === 200) {
            console.log('res', res)
            this.props.history.replace('/main')
          }
        })
      }
    })
  }
  changeYzm = () => {
    this.setState({
      yzmUrl: `http://49.234.235.193:8888/api/user/getVerify?${Math.random()}`
    })
  }
  // handleChange = (name, val) => {
  //     // 更新状态
  //     this.usernameErrorMsg = ''
  //     this.passwordErrorMsg = ''
  //     this.userInfo[name] = val   // 属性名不是name, 而是name变量的值
  // }
  // successToast = () => {
  //     Toast.success('登录成功!!!', 1, () => {
  //         this.props.history.goBack()   //返回上一页
  //     });
  // }
  // 点击登录调用
  // login = (userInfo) => {
  //     const { username, password } = userInfo
  //     if (!username) {
  //         this.usernameErrorMsg = '用户名不存在！'
  //     }
  //     if (!password) {
  //         this.passwordErrorMsg = '密码不能为空！'
  //     } else {
  //         reqLogin({ username, password }).then(res => {
  //             if (res.data.code === 0) {
  //                 this.successToast()
  //             } else {
  //                 this.passwordErrorMsg = res.data.msg
  //             }
  //         })
  //     }
  // }
  // toRegister = () => {
  //     this.props.history.replace('/register')
  // }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 17,
          offset: 4
        }
      }
    }
    return (
      <div>
        <div className="login"></div>
        <div className="form">
          <div className="title">web电影购票管理系统</div>
          <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的用户名!' }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入您的密码!' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item label="验证码" style={{ marginBottom: 0 }}>
              {getFieldDecorator('checkCode', {
                rules: [{ required: true, message: '请输入您的验证码!' }]
              })(
                <div>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="text"
                    placeholder="yzm"
                  />
                  <div onClick={this.changeYzm}>
                    <img src={this.state.yzmUrl} alt="验证码" />
                  </div>
                </div>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const Login = Form.create()(LoginForm)
export default Login

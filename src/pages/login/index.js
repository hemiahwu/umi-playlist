/**
 * title: 登录
 */
import React from 'react';
import { login } from './services/login';
import { Layout, Icon, Form, Input, Button } from 'antd';
import styles from './index.scss';

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };

const index = ({ form }) => {
  const handleSubmit = () => {
    // form校验
    form.validateFields((err, values) => {
      if (!err) {
        login(values).then(data => console.log(data));
      }
    });
  };
  return (
    <Layout>
      <Content className={styles.content}>
        <div className={styles.form}>
          <h1>
            <img src={require('@/assets/logo2.png')} alt="logo2" />
            管理系统
          </h1>
          {/* Form表单 */}
          <Form>
            <Form.Item>
              {form.getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '用户名不能为空',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={iconStyle} />}
                  placeholder="请输入用户名"
                  autoFocus
                />,
              )}
            </Form.Item>
            <Form.Item>
              {form.getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ],
              })(
                <Input
                  type="password"
                  prefix={<Icon type="lock" style={iconStyle} />}
                  placeholder="请输入密码"
                  autoFocus
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" style={{ width: '100%' }}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer className={styles.footer}>
        Copyright <Icon type="copyright" /> 2020 米修在线
      </Footer>
    </Layout>
  );
};

export default Form.create()(index);

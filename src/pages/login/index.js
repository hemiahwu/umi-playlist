/**
 * title: 登录
 */
import React from 'react';
import { Layout, Icon, Form, Input, Button } from 'antd';
import styles from './index.scss';

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };

export default function index() {
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
              <Input
                prefix={<Icon type="user" style={iconStyle} />}
                placeholder="请输入用户名"
                autoFocus
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                prefix={<Icon type="lock" style={iconStyle} />}
                placeholder="请输入密码"
                autoFocus
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ width: '100%' }}>
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
}

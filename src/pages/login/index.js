// http://localhost:8000/login
import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.scss';

const { Content, Footer } = Layout;

export default function index() {
  return (
    <Layout>
      <Content className={styles.content}>登录</Content>
      <Footer className={styles.footer}>
        Copyright <Icon type="copyright" /> 2020 米修在线
      </Footer>
    </Layout>
  );
}

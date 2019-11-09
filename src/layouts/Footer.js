import React from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;

const index = () => {
  return (
    <Footer className="footer">
      Copyright <Icon type="copyright" /> 2020 米修在线
    </Footer>
  );
};

export default index;

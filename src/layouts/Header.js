import React from 'react';
import { Menu } from 'antd';
import Link from 'umi/link';

const MenuItem = Menu.Item;
const index = () => {
  return (
    <div className="header">
      <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
      <Menu className="menus" mode="horizontal" theme="dark">
        <MenuItem key="/">
          <Link to="/">首页</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default index;

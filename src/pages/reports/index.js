/**
 * title: 周报
 */

import React, { Component } from 'react';
import Link from 'umi/link';
import { Button } from 'antd';
import { Content, Tool } from '@/components/Layout';
import List from './components/List';

class index extends Component {
  render() {
    return (
      <Content className="report-wrapper">
        <Tool>
          <Button type="primary">
            <Link to="/reports/write">写周报</Link>
          </Button>
        </Tool>
        <List></List>
      </Content>
    );
  }
}

export default index;

/**
 * title: 用户
 */
import React from 'react';
import { Button } from 'antd';
import { Content, Tool } from '@/components/Layout';
import Table from '@/components/Table';
import { connect } from 'dva';

const index = () => {
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      width: '25%',
    },
    {
      title: '姓名',
      dataIndex: 'nickname',
      key: 'nickname',
      width: '25%',
    },
    {
      title: '用户类型',
      dataIndex: 'type',
      key: 'type',
      width: '25%',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <div>
          <a>编辑</a>
          <a>删除</a>
        </div>
      ),
    },
  ];
  return (
    <Content>
      <Tool>
        <Button type="primary">添加用户</Button>
      </Tool>
      <Table columns={columns} />
    </Content>
  );
};

export default connect(({ users }) => ({ ...users }))(index);

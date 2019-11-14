/**
 * title: 用户
 */
import React from 'react';
import { Button, Table } from 'antd';
import styles from './index.scss';
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
    <div className={`${styles['content-wrapper']}`}>
      <div className={`${styles['tool-wrapper']}`}>
        <Button type="primary">添加用户</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
};

export default index;

/**
 * title: 用户
 */
import React from 'react';
import { Button, Message } from 'antd';
import { Content, Tool } from '@/components/Layout';
import Table from '@/components/Table';
import { connect } from 'dva';
import UserModal from './components/UserModal';

const index = ({ list, dispatch, loading, addLoading }) => {
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
      render: text => <span>{text === '0' ? '管理员' : '普通用户'}</span>,
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

  const reload = () => {
    dispatch({
      type: 'users/fetch',
      payload: { page: 1 },
    });
  };

  const handleAdd = values => {
    return dispatch({ type: 'users/add', payload: values }).then(res => {
      if (res && res.state == 'success') {
        Message.success(res.msg);
        reload();
        return res;
      } else {
        Message.error('添加用户失败');
      }
    });
  };
  return (
    <Content>
      <Tool>
        <UserModal onAdd={handleAdd} addLoading={addLoading}>
          <Button type="primary">添加用户</Button>
        </UserModal>
      </Tool>
      <Table
        columns={columns}
        dataSource={list}
        rowKey={(list, index) => list.id}
        loading={loading}
      />
    </Content>
  );
};

export default connect(({ users, loading }) => ({
  ...users,
  loading: loading.effects['users/fetch'],
  addLoading: loading.effects['users/add'],
}))(index);

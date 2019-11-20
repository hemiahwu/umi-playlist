/**
 * title: 用户
 */
import React from 'react';
import { Button, Message, Popconfirm } from 'antd';
import { Content, Tool } from '@/components/Layout';
import Table from '@/components/Table';
import { connect } from 'dva';
import UserModal from './components/UserModal';

const index = ({ list, dispatch, loading, addLoading, total, page, pageSize }) => {
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
          <UserModal onOk={value => handleEdit(record.id, value)} title="编辑用户" record={record}>
            <a>编辑</a>
          </UserModal>
          <Popconfirm title="确定删除该用户吗?" onConfirm={() => handleDelete(record.id)}>
            <a>删除</a>
          </Popconfirm>
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

  // 分页
  const handlePageChange = pageNum => {
    // console.log(pageNum);
    if (page !== pageNum) {
      // 发起请求
      dispatch({ type: 'users/fetch', payload: { page: pageNum } });
    }
  };

  // 编辑
  const handleEdit = (id, value) => {
    // console.log(value, id);
    return dispatch({
      type: 'users/edit',
      payload: { id, value },
    }).then(res => {
      if (res && res.state == 'success') {
        Message.success(res.msg || '编辑用户成功');
        reload();
        return res;
      } else {
        Message.error('编辑用户失败');
      }
    });
  };

  // 删除
  const handleDelete = id => {
    dispatch({
      type: 'users/remove',
      payload: id,
    }).then(res => {
      if (res && res.state == 'success') {
        Message.success(res.msg || '删除用户成功');
        reload();
      } else {
        Message.error('删除用户失败');
      }
    });
  };

  return (
    <Content>
      <Tool>
        <UserModal onOk={handleAdd} addLoading={addLoading}>
          <Button type="primary">添加用户</Button>
        </UserModal>
      </Tool>
      <Table
        columns={columns}
        dataSource={list}
        rowKey={(list, index) => list.id}
        loading={loading}
        pagination={{
          total: total,
          pageSize: pageSize,
          current: page,
          onChange: handlePageChange,
        }}
      />
    </Content>
  );
};

export default connect(({ users, loading }) => ({
  ...users,
  loading: loading.effects['users/fetch'],
  addLoading: loading.effects['users/add'],
}))(index);

import React, { Component } from 'react';
import { Modal, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

// 表单单排格式
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

class UserModal extends Component {
  render() {
    return (
      <Modal title="添加用户" visible={true}>
        <Form>
          <FormItem label="用户名" {...formItemLayout}>
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="姓名" {...formItemLayout}>
            <Input placeholder="请输入姓名" />
          </FormItem>
          <FormItem label="用户类型" {...formItemLayout}>
            <RadioGroup>
              <Radio value={'0'}>管理员</Radio>
              <Radio value={'1'}>普通用户</Radio>
            </RadioGroup>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
export default UserModal;

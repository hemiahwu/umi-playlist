import React, { Component } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { withClick } from '@/utils/hoc';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

// 表单单排格式
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

class UserModal extends Component {
  state = {
    visible: false,
  };

  handleOpenClick = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <>
        {withClick(children, this.handleOpenClick)}
        <Modal
          title="添加用户"
          visible={visible}
          centered={true}
          maskClosable={false}
          onCancel={this.handleCancel}
        >
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
      </>
    );
  }
}
export default UserModal;

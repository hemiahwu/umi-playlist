/**
 * title:
 */
import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Content } from '@/components/Layout';
import E from 'wangeditor';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorContent: null,
      editorCheck: true,
    };
  }

  componentDidMount() {
    this.initEditor();
  }

  initEditor() {
    const editor = new E(this.refs.editorRef);

    // 监听内容
    editor.customConfig.onchange = html => {
      let editorCheck = true;
      if (!html || html == '<p><br></p>') {
        editorCheck = false;
      }
      this.setState({
        editorContent: html,
        editorCheck: editorCheck,
      });
    };

    editor.create();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { editorCheck } = this.state;
    return (
      <Content>
        <Form>
          <Form.Item label="标题">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: '用户名不能为空',
                },
              ],
            })(<Input placeholder="请输入周报标题" />)}
          </Form.Item>
          <Form.Item label="接收人">
            {getFieldDecorator('receiverId', {
              rules: [
                {
                  required: true,
                  message: '用户名不能为空',
                },
              ],
            })(<Select placeholder="请请选择接收人" />)}
          </Form.Item>
          <Form.Item label="内容" required>
            <div
              ref="editorRef"
              style={!editorCheck ? { border: '1px red solid' } : { border: '1px #eee solid' }}
            />
            {!editorCheck && <p style={{ color: 'red' }}>内容不能为空</p>}
          </Form.Item>
          <Form.Item className="action">
            <Button>取消</Button>
            <Button type="primary">提交</Button>
          </Form.Item>
        </Form>
      </Content>
    );
  }
}

export default Form.create()(index);

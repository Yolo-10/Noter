import React from "react";
import { Button, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import './index.scss'

const Setting: React.FC = () => {
  return (
    <div className="g-setting">
      <div className="m-title">账号设置</div>
      <Form layout='vertical' className='m-setting-form'>
        <div className='m-form'>
          <Form.Item name='userName' required label='用户名' >
            <Input size='large' placeholder='用户名' />
          </Form.Item>

          <Form.Item name='email' required label='常用邮箱' >
            <Input size='large' placeholder='常用邮箱' />
          </Form.Item>

          <Form.Item name='realName' label='真实姓名'>
            <Input size='large' placeholder='真实姓名' />
          </Form.Item>

          <Form.Item name='desc' required label='个人简介'>
            <TextArea size='large' placeholder='个人简介' autoSize={{ minRows: 2 }} />
          </Form.Item>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button size='large' className='setting-save' htmlType='submit' >
            保存
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Setting;

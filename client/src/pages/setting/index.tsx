import React, { useCallback } from "react";
import { Button, Form, Input, message } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useAppSelector, useAppDispatch } from "@/store";
import { saveUser } from "@/store/userSlice";
import { post } from "@/utils/axios";
import { API_USER_MODIFY } from "@/constant/urls";

import './index.scss'
import { saveToken } from "@/utils/token";

const Setting: React.FC = () => {
  const userInfo = useAppSelector(state => state.user.userInfo)
  const dispatch = useAppDispatch()

  const submit = useCallback(async(values:any) => {
    const r = await post(API_USER_MODIFY, values)
    saveToken(r?.data?.token)
    dispatch(saveUser(r?.data))
    message.success(r.message)
  },[])

  return (
    <div className="g-setting">
      <div className="m-title">账号设置</div>
      <Form layout='vertical' className='m-setting-form' onFinish={submit} initialValues={userInfo}>
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

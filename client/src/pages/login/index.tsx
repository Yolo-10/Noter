import React, { useCallback, useEffect, useState } from 'react'
import { Button, Spin } from 'antd/es';
import { GithubOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import * as url from '@/constant/urls'
import { useAppDispatch } from '@/store';
import { saveUser } from '@/store/userSlice';
import { getUrlParams, isN } from '@/utils/fn';
import { get } from '@/utils/axios';
import { saveToken } from '@/utils/token';
import './index.scss'

const Login: React.FC = () => {
  const { search } = useLocation()
  const [loading,setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const doOauth = useCallback(() => {
    window.location.href = url.API_GITHUB
  },[])

  const doLogin = async (code: string) => {
    setLoading(true)
    let res = await get(url.API_OAUTH, { code: code })
    if (!isN(res?.data)) {
      dispatch(saveUser(res?.data?.user))
      saveToken(res?.data?.token)
      window.location.href = '/'
    }
    setLoading(false)
  }
  
  useEffect(() => {
    let code = getUrlParams(search)?.code;
    if (code !== undefined) doLogin(code)
  },[])

  return (
    <Spin spinning={loading}>
      <div className='g-login'>
        <div className='m-login'>
            <Button
              type='primary'
              style={{
                height: 38,
                width: '100%',
                background: '#24292e',
                borderColor: '#24292e',}}
              onClick={doOauth}
            >
              <GithubOutlined />
                Github 一键登录
            </Button>
        </div>
      </div>
    </Spin>

  );
}

export default Login
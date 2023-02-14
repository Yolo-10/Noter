import React, { useCallback, useEffect } from 'react'
import { Button } from 'antd/es';
import { GithubOutlined } from '@ant-design/icons';
import * as url from '@/constant/urls'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { saveUser } from '@/store/userSlice';
import { getUrlParams, isN } from '@/utils/fn';
import { get } from '@/utils/axios';
import { saveToken } from '@/utils/token';
import './index.scss'

const Login: React.FC = () => {
  const { search } = useLocation()
  const dispatch = useAppDispatch()

  const doOauth = useCallback(() => {
    window.location.href = url.API_GITHUB
  },[])

  const doLogin = async(code: string) => {
    let res = await get(url.API_OAUTH, { code: code })
    if (!isN(res?.data)) {
      dispatch(saveUser(res?.data?.user))
      saveToken(res?.data?.token)
      // window.location.href = '/'
    }
  }
  
  useEffect(() => {
    let code = getUrlParams(search)?.code;
    if (code !== undefined) doLogin(code)
  },[])

  return (
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
  );
}

export default Login
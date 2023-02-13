import React, { useEffect } from 'react'
import { Button } from 'antd/es';
import { GithubOutlined } from '@ant-design/icons';
// import OauthPopup from 'react-oauth-popup';
import * as url from '@/constant/urls'
import './index.scss'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { saveUser } from '@/store/userSlice';
import { getUrlParams } from '@/utils/fn';
import { get } from '@/utils/axios';
import { saveToken } from '@/utils/token';

const Login: React.FC = () => {
  const { search } = useLocation()
  const dispatch = useAppDispatch()

  const doOauth = () => {
    window.location.href = url.API_GITHUB
  };

  const doLogin = async(code: string) => {
    let res = await get(url.API_OAUTH,{code:code})
    dispatch(saveUser(res?.data?.user))
    saveToken(res?.data?.token)
  }
  
  useEffect(() => {
    let code = getUrlParams(search)?.code;
    if (code !== undefined) doLogin(code)
  },[])

  return (
    <div className='g-login'>
      <div className='m-login'>
          {/* <OauthPopup
            url={url.API_GITHUB}
            title='Github Login'
            width={500}
            height={700}
            onCode={onCode}
            onClose={()=>{console.log('close')}}
          > */}
            <Button
              type='primary'
              style={{
                height: 38,
                width: '100%',
                background: '#24292e',
                borderColor: '#24292e',
          }}
              onClick={doOauth}
            >
              <GithubOutlined />
                Github 一键登录
            </Button>
          {/* </OauthPopup> */}
      </div>
    </div>
  );
}

export default Login
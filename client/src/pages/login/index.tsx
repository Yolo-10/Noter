import React from 'react'
import { Button } from 'antd/es';
import { GithubOutlined } from '@ant-design/icons';
// import OauthPopup from 'react-oauth-popup';
import * as url from '@/constant/urls'
import './index.scss'
import { useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const { search } = useLocation()
  console.log(search)
  
  const onCode = () => {
    window.location.href = url.API_GITHUB
    // console.log('finish')
    // console.log(code)
    // window.location.href = '/'
  };

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
              onClick={onCode}
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
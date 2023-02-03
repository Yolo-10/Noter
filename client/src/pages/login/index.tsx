import React from 'react'
import { Button } from 'antd/es';
import { GithubOutlined } from '@ant-design/icons';
import OauthPopup from 'react-oauth-popup';
import * as url from '@/constant/urls'

import './index.scss'

const Login: React.FC = () => {

  const onCode = async () => {
    console.log('执行 onCode');
  };

  return (
    <div className='g-login'>
      <div className='m-login'>
          <OauthPopup
            url={url.API_GITHUB}
            onCode={onCode}
            onClose={() => {}}
            title='Github Login'
            width={500}
            height={700}
          >
            <Button
              type='primary'
              style={{
                height: 38,
                width: '100%',
                background: '#24292e',
                borderColor: '#24292e',
              }}
            >
              <GithubOutlined />
                Github 一键登录
            </Button>
          </OauthPopup>
      </div>
    </div>
  );
}

export default Login
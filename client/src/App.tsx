import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd';
import decode from 'jwt-decode'

import RouterConfig from '@/pages/routesConfig'
import { useAppDispatch } from '@/store';
import { getToken, removeToken } from '@/utils/token';
import { isN } from '@/utils/fn';
import { removeUser, saveUser } from '@/store/userSlice';
import { API_USER_VERITY } from './constant/urls';
import { get } from './utils/axios';

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const verity = async (token:string) => {
    const r = await get(API_USER_VERITY, {})
    if (r.code === 200) {
      dispatch(saveUser(decode(token)))
    } else if (r.code === 403) {
      removeToken()
      dispatch(removeUser())
    }
  }

  useEffect(() => {
    let token = getToken()
    if (!isN(token)) {
      verity(token)
    }
  },[])

  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size='large'/>}>
        <RouterConfig/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App

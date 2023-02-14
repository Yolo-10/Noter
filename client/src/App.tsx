import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd';
import decode from 'jwt-decode'

import RouterConfig from '@/pages/routesConfig'
import { useAppDispatch } from '@/store';
import { getToken } from '@/utils/token';
import { isN } from '@/utils/fn';
import { saveUser } from '@/store/userSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let token = getToken()
    if (!isN(token)) {
      dispatch(saveUser(decode(token)))
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

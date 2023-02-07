import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spin } from 'antd';

import RouterConfig from './pages/routesConfig'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size='large'/>}>
        <RouterConfig/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App

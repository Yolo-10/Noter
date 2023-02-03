import React, { Suspense } from 'react'
import type { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

// import RouterConfig from './router'
import Login from '@/pages/login'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App

import React from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';


// 快速导入工具函数
// const lazyload = (moduleName: String) => {
//   const Module = lazy(() => import(`@/views/${moduleName}`));
//   return <Module />;
// };

const Login = lazy(() => import('@/views/login/index'))

interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: any;
}


const routes: Array<Router> = [
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes

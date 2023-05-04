import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 快速导入工具函数
const lazyload = (moduleName: String) => {
  const Module = lazy(() => import(`views/${moduleName}`));
  return <Module />;
};

interface Router {
  name?: String;
  element: any;
  children?: Array<Router>;
  path: String;
}

const routes: Array<Router> = [
  {
    path: '/login',
    element: lazyload('login'),
  },
];

export default routes

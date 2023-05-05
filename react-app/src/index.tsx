import { Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import React from 'react';
const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

const Fallback = () => {
  return <></>;
};

root.render(
  <BrowserRouter>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </BrowserRouter>
);

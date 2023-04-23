import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.tsx';
import {Button} from 'antd'
export default function App() {
  return (
    <div>
      <h2>我是react</h2>
      <Home />
      <Button type="primary">测试</Button>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

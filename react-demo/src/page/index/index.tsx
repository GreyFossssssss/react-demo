import 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './app'
import { ConfigProvider } from 'antd'

ReactDom.render(
    <HashRouter>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </HashRouter>,
    document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd';
import CustomThemeContext from './Theme/CustomThemeContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <React.StrictMode>
      <CustomThemeContext>
        <App />
      </CustomThemeContext>
    </React.StrictMode>
  </ConfigProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import  { router } from './Routes/App.tsx'
import './index.css'
import { ConfigProvider } from 'antd';
import CustomThemeContext from './Theme/CustomThemeContext.tsx';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <ConfigProvider>
      <CustomThemeContext>
        <ToastContainer/>
           <RouterProvider router={router}/>
      </CustomThemeContext>
  </ConfigProvider>
    </React.StrictMode>
)

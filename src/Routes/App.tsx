import '../App.css'
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from '../Pages/Auth/Login';
import { Layout, theme } from 'antd';
import Sidebar from '../Components/Organisms/Sidebar/Sidebar';
import Headers from '../Components/Organisms/header/Header';
import { useState } from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
// import Registration from '../Pages/Auth/Registration';
import Option from '../Pages/Dashboard/Option';

const {Content} = Layout;

interface protectedProps{
  children:React.ReactNode;
}

const ProtectedRoutes = ({children}:protectedProps)=>{
  const [collapsed, setCollapsed] = useState(false);
  const {
      token: { colorBgContainer, borderRadiusLG },
      
    } = theme.useToken();
    const collapse = ()=>{
      setCollapsed(!collapsed)
    }

  return(
    <>
      <Layout style={{minHeight:"100vh"}}>
            <Sidebar collapsed={collapsed} />
      <Layout>
        <Headers collapse = {collapse}/>
         
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        
        </Content>
      </Layout>
    </Layout>
    </>

  )
}

export const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Login/>}/>
  <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard/></ProtectedRoutes>}/>
  <Route path='/option' element={<ProtectedRoutes> <Option/></ProtectedRoutes>}/>
  </>

)
);
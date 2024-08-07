import '../App.css'
import { Route,  createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from '../Pages/Auth/Login';
import { Layout } from 'antd';
import Sidebar from '../Components/Organisms/Sidebar/Sidebar';
import Headers from '../Components/Organisms/header/Header';
import { useState } from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
// import Registration from '../Pages/Auth/Registration';

import Portfolio from '../Pages/portfolio/Portfolio';
//  import Project from '../Pages/project/Project';
import ProjectList from '../Pages/project/ProjectList';
import Task from '../Pages/task/TaskList';
import Report from '../Pages/report/Report';
import Registration from '../Pages/Auth/Registration';
import { ContentWrapper } from './Styles';
import { QueryClientProvider,QueryClient} from 'react-query';
import Project from '../Pages/project/Project';
import TaskForm from '../Pages/task/TaskForm';
import Profile from '../Pages/profile/Profile';
const {Content} = Layout;

interface protectedProps{
  children:React.ReactNode;
}

const ProtectedRoutes = ({children}:protectedProps)=>{
  const [collapsed, setCollapsed] = useState(false);
    const collapse = ()=>{
      setCollapsed(!collapsed)
    }
    const queryClient = new QueryClient();
  return(
    <>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Headers collapse = {collapse}/>
        <Layout style={{minHeight:"100vh"}}>
              <Sidebar collapsed={collapsed} />          
          <Content>
            <ContentWrapper>
              {children}
            </ContentWrapper>
          </Content>
        </Layout>
    </Layout>
    </QueryClientProvider>
    </>
  )
}
export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={ <Registration/>}/>
    <Route path='/home' element={<ProtectedRoutes> <Dashboard/></ProtectedRoutes>}/>
    <Route path='/portfolio' element={<ProtectedRoutes> <Portfolio/></ProtectedRoutes>}/>
    <Route path='/project' element={<ProtectedRoutes> <ProjectList/></ProtectedRoutes>}/>
    <Route path='/profile' element={<ProtectedRoutes> <Profile/></ProtectedRoutes>}/>
    <Route path='/create_project' element={<ProtectedRoutes> <Project/></ProtectedRoutes>}/>
    <Route path='/task' element={<ProtectedRoutes> <Task/></ProtectedRoutes>}/>
    <Route path='/taskForm' element={<ProtectedRoutes> <TaskForm/></ProtectedRoutes>}/>
    <Route path='/report' element={<ProtectedRoutes> <Report/></ProtectedRoutes>}/>
  </>
)
);
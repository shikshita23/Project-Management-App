import { Menu,Layout, MenuProps } from 'antd';
import {
    // UploadOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
    // LaptopOutlined,
    // NotificationOutlined,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    FileOutlined,
    TeamOutlined
  } from '@ant-design/icons'
import React from 'react';
import { Link } from 'react-router-dom';
// import Dashboard from '../../../Pages/Dashboard/Dashboard';

const {  Sider } = Layout;

interface siderProps{
    collapsed:boolean
}
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/dashboard">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link to="/option">option</Link>, '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
export default function Sidebar({collapsed}:siderProps){
    console.log("collapse>>",collapsed)
    return (
        <>
            <Sider trigger={null} theme='light'  collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
        <Menu
          
              mode="inline"
              defaultSelectedKeys={['1']}
              items={items}
              
            />
      </Sider>
        </>
    )
}
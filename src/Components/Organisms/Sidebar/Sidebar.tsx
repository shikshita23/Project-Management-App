import { Menu,Layout, MenuProps } from 'antd';
import {
    HomeOutlined,
    CheckCircleOutlined,
    FolderOutlined,
    ProjectOutlined,
    PlusOutlined
    
  } from '@ant-design/icons'
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
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
  {
    type:'group', 
    children:[

      getItem(<Link to="/home">Home</Link>, '1', <HomeOutlined />),
      getItem(<Link to="/task">My task</Link>, '2', <CheckCircleOutlined />),
    ],
  },
  {
    type:'group',
    label:'Insights',
    children:[
      getItem(<Link to="/portfolio">Portfolio</Link>, '3', <FolderOutlined />),
      getItem(<Link to="/report">Reports</Link>, '5', <FontAwesomeIcon icon={faChartLine} />),
    ],
  },
  // getItem('Portfolios', 'sub1', <FolderOutlined />, [
  //   getItem('portfolio 1', '3'),
  //   getItem('portfolio 2', '4'),
  //   getItem('portfolio 3', '5'),
  // ]),
  {
    type:'group',
    label:'Project',
    children:[
      getItem(<Link to="/project">Projects</Link>, '4', <ProjectOutlined />),

    ]
  }
];
export default function Sidebar({collapsed}:siderProps){
    console.log("collapse>>",collapsed)
    return (
        <>
            <Sider trigger={null} theme='light'  collapsible collapsed={collapsed} className='h-auto'>
            <div className="demo-logo-vertical" />        
        <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              items={items}
              style={{ height: '100%', borderRight: 0 }}
            />
      </Sider>
        </>
    )
}
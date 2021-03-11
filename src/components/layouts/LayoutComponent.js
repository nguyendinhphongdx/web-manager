import {
  AntDesignOutlined, CalendarOutlined, DesktopOutlined,
  FileOutlined, PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { BackTop, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, NavLink, Route } from "react-router-dom";
import { styleBackTop } from '../../Common/variable/var';
import page from '../../Router';
import BreadcrumbComponent from '../breadcrumb/breadcrumb';
import HeaderComponent from '../header/header';
import './layout.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default function LayoutComponent(){
    const today = new Date();
    const [state,setState] = useState(false);
    const handleChangeState=()=>{
        setState(state?false:true);
    }

    const showPage = (Page) => {
        var result = null;
        if (Page.length > 0) {
          result = Page.map((Page, index) => (
              <Route
              key={index}
              exact={Page.exact}
              path={Page.path}
              component= {Page.main}
            />
          ))
        }
        return result;
      }
    
    return(
        <Layout  >
      <Sider collapsible collapsed={state} onCollapse={handleChangeState}>
        <div className="" style={{position:'fixed',width:'200px'}}>
          <div className="logo" style={{height:'50px'}} >  
          <Menu style={{height:'100%'}}>
          <div className="pic">
           <Menu.Item icon={<AntDesignOutlined style={{ fontSize: '24px'}}/>}>
              <Link to={'/home'} >
              </Link> 
            </Menu.Item>
          </div>
          </Menu>
            </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink to={'/home'}> HomePage</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <NavLink to={'/schemal'}> SchemalPage</NavLink>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<TeamOutlined />}>
            <NavLink to={'/professor'}> Professor</NavLink>
            </Menu.Item>
            <Menu.Item key="3"  icon={<UserOutlined />}><Link to={'/students'}>Students</Link></Menu.Item>
            <SubMenu key="sub3" icon={<CalendarOutlined  />} title=" Subject">
              <Menu.Item key="4"><NavLink to={'/subject?type=base'}> Base Subject</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to={'/subject?type=advanced'}> Advanced Subject</NavLink></Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<FileOutlined />}>
              <NavLink to={'/class'}> Class</NavLink>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <NavLink to={'/file'}> Files</NavLink>
            </Menu.Item>
          </Menu>
          </div>
        </Sider>
      
        <Layout className="site-layout" >
          <HeaderComponent/>
          <Content style={{ margin: '0 16px' }} className="contene">
            <BreadcrumbComponent title="Home"/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {showPage(page)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>`Designed for Clients-Server HaNoi {today.toLocaleDateString()} `</Footer>
        </Layout>
          <BackTop>
            <div style={styleBackTop}>UP</div>
          </BackTop>
      </Layout>
          
    );
}
import { BellOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Col, Drawer, Dropdown, Menu, message, Popover, Row } from "antd";
import Search from "antd/lib/input/Search";
import { useState } from "react";
import {useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { MenuCss } from "../../Common/variable/var";
import {  OnLogout } from '../../services/AuthService';
import './header.css';
export default function HeaderComponent() {
    const [current,setCurrent] = useState('mail');
    const [visible, setVisible] = useState(false);
    const currentUser = useSelector(state=>state.Admin.admin);
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    const handleClick = e => {
       setCurrent(e.key);
      };
      const menu = (
        <Menu >
          <Menu.Item key="1" icon={<LogoutOutlined /> } onClick={OnLogout}>
            Logout
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} >
          <Link to={'/profile'}>Setting</Link>
          </Menu.Item>
        </Menu>
      );
      const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
    return(
        <div className="headerComponent">
            <Row className="row-header">
            <Col span={10}></Col>
            <Col span={14} className="col-search">
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={MenuCss}>
                    <Menu.Item key="search" >
                        <Search placeholder="input search text"  enterButton />
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Dropdown.Button overlay={menu}  icon={<UserOutlined />}>
                            {currentUser.user_name||'AdminDefault'}
                        </Dropdown.Button>
                    </Menu.Item>
                    <Menu.Item key="noti">
                      
                        <Popover placement="bottomRight" title={'Notifications'} content={content} trigger="click">
                            <Badge size="default" count={5} offset={[-10,0]}>
                            <BellOutlined style={{ fontSize: '20px' }} />
                            </Badge>
                        </Popover>
                      
                    </Menu.Item>
                    <Menu.Item key="Setting" onClick={showDrawer}>
                    <Badge size="default" count={5} offset={[-10,0]}>
                     <SettingOutlined style={{ fontSize: '20px' }} />
                    </Badge>
                    </Menu.Item>
                </Menu>
            </Col>
            </Row>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
        </div>
    );
}
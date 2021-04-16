import { TeamOutlined,BookOutlined } from '@ant-design/icons';
import { Avatar, List, Menu, Modal } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { filterClassInStudent } from '../../helpers/uploadPreview';
import { GradeMark } from '../FormModal/student/gradleMark';

export function DrawerProfessor(props){
    const {record} = props;
    const [_class,setClass] = useState(()=>{})
    const elementClass = record.class.map((item,index)=>{
        const nameClass = item?item.name:item;
        const handleClick = (e)=>{
        }
        return (
            <Menu.Item key={index}>
                <div className="" onClick={(handleClick)}>{nameClass}</div>
            </Menu.Item>
        );
    })
    return(
        <Menu theme="light"  defaultOpenKeys={["students"]}  mode="inline">
            
        <SubMenu key="classes" icon={<TeamOutlined /> } title=" Class">
          {elementClass}
        </SubMenu>
        <SubMenu key="professor" icon={<TeamOutlined /> } title=" More Info">
        <List
            itemLayout="horizontal"
            // dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item>
            )}
        />
        </SubMenu>
      </Menu>
    );
}
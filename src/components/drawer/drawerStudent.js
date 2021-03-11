import { TeamOutlined,BookOutlined } from '@ant-design/icons';
import { Avatar, List, Menu, Modal } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { filterClassInStudent } from '../../helpers/uploadPreview';
import { GradeMark } from '../FormModal/student/gradleMark';

export function DrawerStudent(props){
    const {record} = props;
    const classRedux = useSelector(state=>state.Class.classes)
    const newClasses = filterClassInStudent(record.class,classRedux);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [_class,setClass] = useState(()=>{})
    const showModal = (index) => {
        setClass(newClasses[index]);

      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const elementClass = newClasses.map((item,index)=>{
        const nameClass = item?item.name:item;
        const handleClick = (e)=>{
            showModal(index)
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
        <Modal title={record.name} visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <GradeMark _class={_class} record={record} callback={handleOk}/>
        </Modal>
      </Menu>
    );
}
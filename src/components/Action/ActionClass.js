import { Drawer, Modal, Popconfirm} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../Common/variable/var";
import { useEffect, useState } from "react";
import { DrawerClass } from "../drawer/drawerClass";
import { useDispatch } from "react-redux";
import { GetDataStudent } from "../../services/StudentService";
import { UpdateClass } from "../FormModal/class/editClass";

export default function ActionClass(props){
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()
    useEffect(()=>{
        GetDataStudent(dispatch)
    },[]);
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const {record} = props;
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} onClick={showModal}/>
              <Modal title="Edit Class" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                  <UpdateClass record={record} callback={handleOk}/>  
              </Modal>
            <Popconfirm title="Sure to delete?" onConfirm={() => alert('Are you sure you want to delete'+record.name)}>
                <DeleteOutlined  style={{fontSize: '20px' }}/>
            </Popconfirm>
            <Drawer
            title={record.name}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={300}
          >
            <DrawerClass students={record.member}/>
          </Drawer>
        </div>
    );
}
import { Drawer, Modal, Popconfirm} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined,TeamOutlined} from '@ant-design/icons';
import { rowAction } from "../../Common/variable/var";
import { useEffect, useState } from "react";
import { DrawerClass } from "../drawer/drawerClass";
import { useDispatch, useSelector } from "react-redux";
import { GetDataStudent } from "../../services/StudentService";
import { UpdateClass } from "../FormModal/class/editClass";
import { DeleteDataClass } from "../../services/ClassService";
import { AddMemberToClass } from "../FormModal/class/addMember";

export default function ActionClass(props){
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalMemberVisible, setIsModalMemberVisible] = useState(false);
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
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
    const showModalMember = () => {
      setIsModalMemberVisible(true);
  };
    const handleOkMember = () => {
      setIsModalMemberVisible(false);
  };

  const handleCancelMember = () => {
    setIsModalMemberVisible(false);
  };
    const handleDelete=()=>{
      const body ={_id:record._id}
      DeleteDataClass(dispatch,body)
      .then((result)=>console.log(result));
      
    }
    const {record} = props;
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} onClick={showModal}/>
              <Modal title="Edit Class" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                  <UpdateClass state={state} record={record} callback={handleOk}/>  
              </Modal>
              <TeamOutlined style={{fontSize: '20px' }} onClick={showModalMember}/>
              <Modal title="Members" visible={isModalMemberVisible} onOk={handleOkMember} onCancel={handleCancelMember} footer={null}>
                  <AddMemberToClass state={state} record={record} callback={handleCancelMember}/>  
              </Modal>
            <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
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
            <DrawerClass students={record.member} state={state}/>
          </Drawer>
        </div>
    );
}
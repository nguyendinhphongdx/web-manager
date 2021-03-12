import { Popconfirm, Drawer} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../Common/variable/var";
import { useState } from "react";
import { DrawerStudent } from "../drawer/drawerStudent";
import { Delete_Student_Service } from "../../services/StudentService";
import { useDispatch } from "react-redux";

export default function ActionStudent(props){
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    const {record} = props;
    const handleDelete = () => {
      console.log(record._id);
      const body ={_id:record._id}
      console.log(body);
      Delete_Student_Service(dispatch,body)
    }
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} />
                <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                <DeleteOutlined  style={{fontSize: '20px' }} />
            </Popconfirm>
            <Drawer
              title={record.name}
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <DrawerStudent record={record}/>
            </Drawer>
        </div>
    );
}
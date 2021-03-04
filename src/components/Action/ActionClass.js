import { Drawer, Popconfirm} from "antd";
import {EditOutlined,DeleteOutlined,WalletOutlined} from '@ant-design/icons';
import { rowAction } from "../../Common/variable/var";
import { useState } from "react";

export default function ActionClass(props){
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
   
    const {record} = props;
    return(
        <div style={rowAction}>
            <WalletOutlined style={{fontSize: '20px' }} onClick={showDrawer}/>
            <EditOutlined style={{fontSize: '20px' }} />
                <Popconfirm title="Sure to delete?" onConfirm={() => alert('Are you sure you want to delete'+record.name)}>
                <DeleteOutlined  style={{fontSize: '20px' }}/>
            </Popconfirm>
            <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={400}
          >
            <p>Some contents 2...</p>
            <p>Some contents. 3..</p>
            <p>Some contents. 4..</p>
          </Drawer>
        </div>
    );
}
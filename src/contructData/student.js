import { Popconfirm } from "antd"
import {EditOutlined} from '@ant-design/icons';
import { rowAction } from "../Common/variable/var";
import '../Common/Css/Common.css';
export const dataSource = []
for(var i=0;i<50;i++){
    const status = i%2===0?'blocked':'active'
    dataSource.push({
        key: i,
        name:`name ${i}`,
        Class:`Class ${i}`,
        status:status,
        description:`description ${i}`
    })
}
export const columns =[
    {
        key: 'name',
        title: 'Name',
        dataIndex:'name'
    },
    {
        key: 'Class',
        title: 'Class',
        dataIndex:'Class'
    },
    {
        key: 'status',
        title: 'Status',
        dataIndex:'status'
    },
    {
        key: 'description',
        title: 'description',
        dataIndex:'description'
    },
    {
        key: 'operation',
        title: 'Action',
        dataIndex: 'operation',
        render:(record)=>{
            return(
                <div style={rowAction}>
                <EditOutlined style={{fontSize: '20px' }} />
                    <Popconfirm title="Sure to delete?" onConfirm={() => console.log(record.name)}>
                    <a>Delete</a>
                 </Popconfirm>
            </div>
            );
        }
    },

]
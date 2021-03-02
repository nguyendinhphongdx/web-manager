import { Popconfirm } from "antd";
import { rowAction } from "../Common/variable/var";
import {EditOutlined} from '@ant-design/icons';

export const dataSource = [];
for (let index = 0; index < 50; index++) {
    dataSource.push({
        key: index,
        name:`Class ${index}`,
        subject:`Subject ${index}`,
        total:`${index}`,
        frofessor:`frofessor ${index}`
    });
}
export const columns =[
    {
        title: 'Class Name',
        key: 'name',
        dataIndex:'name'
    },
    {
        title: 'Subject',
        key: 'subject',
        dataIndex:'subject'
    },
    {
        title: 'Total',
        key: 'total',
        dataIndex:'total'
    },
    {
        title: 'Frofessor',
        key: 'frofessor',
        dataIndex:'frofessor'
    },
    {
        title: 'Action',
        key: 'operation',
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
    }
];

import { Popconfirm } from "antd"
import {EditOutlined} from '@ant-design/icons';
import { rowAction } from "../Common/variable/var";
import '../Common/Css/Common.css';
import ActionStudent from "../components/Action/ActionStudent";
import ImageComponent from "../components/Image/Image";
import defaultAvatar from '../images/default.png';
export const dataSource = []
for(var i=0;i<50;i++){
    const status = i%2===0?'blocked':'active'
    dataSource.push({
        key: i,
        name:`name ${i}`,
        Class:`Class ${i}`,
        age:`${i}`,
        email:`gmail${i}@gmail.com`,
        status:status,
        description:`description ${i}`
    })
}
export const columns =[
    {
        key: 'key',
        title: 'index',
        dataIndex:'key',
        width:'5%'
    },
    {
        key: 'name',
        title: 'Name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.Length - b.name.Length 
          },
          width:'15%'
    },
    {
        title: 'Avartar',
        width:'10%',
        render:(record)=> <ImageComponent url={record.url||defaultAvatar}/>
    },
    {
        key: 'age',
        title: 'Age',
        dataIndex:'age',
        width:'10%'
    },
    {
        key: 'email',
        title: 'email',
        dataIndex:'email'
    },
    {
        key: 'status',
        title: 'Status',
        dataIndex:'status'
    },
    {
        key: 'operation',
        title: 'Action',
        dataIndex: 'operation',
        render:(record)=> <ActionStudent record={record}/>,
        width:'20%'
    },

]
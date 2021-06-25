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
        title: 'STT',
        dataIndex:'key',
        width:'5%'
    },
    {
        key: 'name',
        title: 'Tên sinh viên',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.Length - b.name.Length 
          },
          width:'15%'
    },
    {
        title: 'Ảnh đại diện',
        width:'10%',
        render:(record)=> <ImageComponent url={record.image} type='student'/>
    },
    {
        key: 'age',
        title: 'Tuổi',
        dataIndex:'age',
        width:'10%'
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex:'email'
    },
    {
        key: 'status',
        title: 'Trạng thái',
        dataIndex:'status'
    },
    {
        key: 'operation',
        title: 'Tác động',
        render:(record)=> <ActionStudent record={record}/>,
        width:'20%'
    },

]
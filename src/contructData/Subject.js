import '../Common/Css/Common.css';
import ActionSubject from "../components/Action/ActionStudent";
export const dataSource = []
for(var i=0;i<50;i++){
    const status = i%2===0?'active':'active'
    dataSource.push({
        key: i,
        name:`name ${i}`,
        price:`${i*10} $`,
        description:`description ${i}`,
        totalSession:`${Math.round(Math.random()*5)}`,
        startDate:`${new Date().toLocaleDateString()}`,
        status:status,
    })
}
export const columns =[
    {
        key: 'key',
        title: 'index',
        dataIndex:'key',
        width:'5%',
    },
    {
        key: 'name',
        title: 'Name',
        dataIndex:'name',
        sorter: {
            compare:(a,b)=> a.name.length - b.name.length
        },
        width:'15%',
    },
    {
        key: 'price',
        title: 'Price',
        dataIndex:'price',
        width:'10%',
    },
    {
        key: 'totalSession',
        title: 'TotalSession',
        dataIndex:'totalSession',
        width:'5%',
    },
    {
        key: 'startDate',
        title: 'Start Date',
        dataIndex:'startDate',
        width:'10%',
    },
    {
        key: 'description',
        title: 'description',
        dataIndex:'description',
        width:'20%',
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
        render:(record)=> <ActionSubject record={record}/>
    },

]
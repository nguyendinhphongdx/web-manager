import { Table } from "antd";
import { AcitonRemoveSubject } from "../Action/ActionProfessor";
import './detailSubject.scss';
const dataSource=[];
for(var i=0;i<10;i++){
        dataSource.push({
            key: i,
            name:`Subject ${i}`,
        });
}
const columns =[
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Action',
            key: 'operation',
            render:(record)=> <AcitonRemoveSubject record={record}/>
        }
]
export default function TableDetailSubject(){
    return(
        <div className="TabelDetailSubject">
        <Table dataSource={dataSource} columns={columns} pagination={false}
        scroll={{y:200}} style={{width:'250px'}} bordered
        />
        </div>
        
    );
}
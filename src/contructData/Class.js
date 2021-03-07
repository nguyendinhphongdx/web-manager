import ActionClass from "../components/Action/ActionClass";
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
        title: 'Index',
        key: 'key',
        dataIndex:'key',
        width:'10%'
    },
    {
        title: 'Class Name',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'20%'
    },
    {
        title: 'Subject',
        key: 'subject',
        dataIndex:'subject'||'Chưa có',
        sorter: {
            compare: (a, b) => a.subject.length - b.subject.length,
            multiple: 3,
          },
        width:'20%'
    },
    {
        title: 'Total',
        key: 'total',
        dataIndex:'total',
        width:'15%',
        sorter: {
            compare: (a, b) => a.total - b.total,
            multiple: 3,
          },
    },
    {
        title: 'Frofessor',
        key: 'frofessor',
        dataIndex:'frofessor',
        width:'15%'
    },
    {
        title: 'Action',
        key: 'operation',
        width: '20%',
        render:(record)=> <ActionClass record={record}/>
    }
];

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
        width:'5%'
    },
    {
        title: 'Class Name',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'15%'
    },
    {
        title: 'Subject',
        key: 'subject',
        dataIndex:'subject',
        sorter: {
            compare: (a, b) => a.subject.length - b.subject.length,
            multiple: 3,
          },
        width:'15%'
    },
    {
        title: 'Start Date',
        key: 'startDate',
        dataIndex:'startDate',
        width:'15%'
    },
    {
        title: 'Total',
        key: 'total',
        dataIndex:'total',
        width:'10%',
        sorter: {
            compare: (a, b) => a.total - b.total,
            multiple: 3,
          },
    },
    {
        title: 'Professor',
        key: 'professor',
        dataIndex:'professor',
        width:'15%'
    },
    {
        title: 'Action',
        key: 'operation',
        width: '20%',
        render:(record)=> <ActionClass record={record}/>
    }
];

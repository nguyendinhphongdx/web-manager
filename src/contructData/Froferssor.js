import ActionFrofessor, { AcitonDetailSubject } from "../components/Action/ActionProfessor";
import ImageComponent from "../components/Image/Image";
export const dataSource = [];
for (let index = 0; index < 50; index++) {
    dataSource.push({
        key: index,
        name:`Frofessor ${index}`,
        subject:[
            {name:`subject 1`},
            {name:`subject 2`},
            {name:`subject 3`},
            {name:`subject 4`},
        ],
        email:`gmail${index}@gmail.com`,
        age:`${index}`,
        phone:`phone ${index}`,
        address: `address {index}`,

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
        title: 'Avatar',
        width:'15%',
        render:(record) =><ImageComponent url={record.image} type='professor' />
    },
    {
        title: 'Frofessor Name',
        key: 'name',
        dataIndex:'name',
        sorter: {
            compare: (a, b) => a.name.length - b.name.length
          },
        width:'15%'
    },
    {
        title: 'Age',
        key: 'age',
        dataIndex:'age',
        sorter: {
            compare: (a, b) => a.age - b.age
          },
        width:'10%'
    },
    {
        title: 'Subject',
        key: 'operation',
        dataIndex:'subject',
        render:(record)=> <AcitonDetailSubject record={record}/>,
        width:'10%'
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex:'email',
        width:'15%',
    },
   
    {
        title: 'Action',
        key: 'operation',
        width: '15%',
        render:(record)=> <ActionFrofessor record={record}/>
    }
];

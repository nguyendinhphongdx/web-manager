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
export const dataChart= [
    {
        "name": "Mark",
        "class": "1810A05",
        "value": 8.74
    },
    {
        "name": "Mark",
        "class": "1810A01",
        "value": 6.96
    },
    {
        "name": "Mark",
        "class": "1810A02",
        "value": 8.59
    },
    {
        "name": "Mark",
        "class": "1810A04",
        "value": 7.61
    },
    {
        "name": "Mark",
        "class": "1010A01",
        "value": 9.31
    },
    {
        "name": "Mark",
        "class": "1810A02",
        "value": 8.59
    },
    {
        "name": "Mark",
        "class": "1810A02",
        "value": 8.59
    },
    {
        "name": "Total",
        "class": "1810A05",
        "value":3
    },
    {
        "name": "Total",
        "class": "1810A01",
        "value": 3
    },
    {
        "name": "Total",
        "class": "1810A02",
        "value": 4
    },
    {
        "name": "Total",
        "class": "1810A04",
        "value":6
    },
    {
        "name": "Total",
        "class": "1010A01",
        "value": 5
    },
    {
        "name": "Total",
        "class": "1810A02",
        "value": 4
    },
    {
        "name": "Total",
        "class": "1810A02",
        "value": 4
    }
]
export const dataSchedule = [
          {
              Id: 1,
              Subject: 'Explosion of Betelgeuse Star',
              StartTime: new Date(2021, 1, 15, 5, 30),
              EndTime: new Date(2021, 1, 15, 7, 0)
          }, {
              Id: 2,
              Subject: 'Thule Air Crash Report',
              StartTime: new Date(2021, 1, 16, 0, 0),
              EndTime: new Date(2021, 1, 16, 2, 0)
          }, {
              Id: 3,
              Subject: 'Blue Moon Eclipse',
              StartTime: new Date(2021, 1, 17, 2, 0),
              EndTime: new Date(2021, 1, 17, 4, 0)
          }, {
              Id: 4,
              Subject: 'Meteor Showers in 2021',
              StartTime: new Date(2021, 1, 14, 0, 0),
              EndTime: new Date(2021, 1, 14, 2, 30)
          },
          {
            Id: 5,
              Subject: 'Explosion of Betelgeuse Star',
              StartTime: new Date(2021, 1, 15, 3, 0),
              EndTime: new Date(2021, 1, 15, 5, 0)
          }, {
              Id: 6,
              Subject: 'Thule Air Crash Report',
              StartTime: new Date(2021, 1, 19, 2, 0),
              EndTime: new Date(2021, 1, 19, 4, 0)
          }, {
              Id: 7,
              Subject: 'Blue Moon Eclipse',
              StartTime: new Date(2021, 1, 18, 1, 30),
              EndTime: new Date(2021, 1, 18, 3, 0)
          },];
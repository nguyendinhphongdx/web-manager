import { Progress } from "antd";

export const dataClass = [];
for(var i=4;i<10;i++) {
    dataClass.push({
        key: i,
        class:`class ${i}`,
        mark: i*9
    });
}
export const columns = [
    {
        title:'Xếp hạng',
        key: 'level',
        dataIndex:'key',
        width:'30%'
    },
    {
        title:'Lớp',
        key: 'class',
        dataIndex:'class',
        width:'35%'
    },
    {
        title:'Điểm TB',
        key:'operation',
        width:'35%',
        render:(record)=>{
            return(
                <Progress percent={Number(record.value*10).toFixed(1)} status="active"/>
            );
        }
    }

]
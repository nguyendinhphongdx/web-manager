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
        title:'Level',
        key: 'level',
        dataIndex:'key'
    },
    {
        title:'Class',
        key: 'class',
        dataIndex:'class'
    },
    {
        title:'Total Mark',
        key:'operation',
        render:(record)=>{
            return(
                <Progress percent={record.mark} status="active"/>
            );
        }
    }

]
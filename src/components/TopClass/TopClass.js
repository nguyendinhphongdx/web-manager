import { Table } from "antd";
import { useSelector } from "react-redux";
import { columns, dataClass } from "../../contructData/TopClass";
import { convertTopClass } from "../../helpers/convert";

export default function TopLevel(){
    const dataTop = useSelector(state=>state.Class.chart)
    const dataConverted = convertTopClass(dataTop)
    console.log(dataConverted);
    return(
        <div className="Toplevel">
            <Table dataSource={dataConverted} columns={columns} pagination={false}></Table>
        </div>
    );
}
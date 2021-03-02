import { Table } from "antd";
import { columns, dataClass } from "../../contructData/TopClass";

export default function TopLevel(){
    return(
        <div className="Toplevel">
            <Table dataSource={dataClass} columns={columns} pagination={false}></Table>
        </div>
    );
}
import { Button, Calendar, Alert  } from "antd";
import { useState } from 'react';
import moment from 'moment';
import './Schemal.scss';
export default function TableSchemal(){
    const [state,setState] = useState(()=>moment('2017-01-25'))
   
    return(
        <div className="tabelPanel">
            {/* <Table dataSource={dataSource} columns={columns}></Table> */}
            <Calendar   />
        </div>
        
    );
}
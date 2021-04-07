import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataScheduleClass } from '../../services/ClassService';
import {EmitInterval, Listenner, sendNotification, subscribeToChat} from '../../socket.io/listenner';
import socketIOClient from "socket.io-client";
import './Schemal.scss';
export default function TableSchemal(){
const data = useSelector(state=>state.Class.schedule);
const [dataSche,setDatasche] = useState(()=>data)
const dispatch = useDispatch();
// EmitInterval();
useEffect(()=>{
    const socket = socketIOClient("http://localhost:5050");
    socket.on("receive_data", data => {
      console.log(data);
    });
    GetDataScheduleClass(dispatch)
    .then(data =>{
        console.log(data);
    })
},[])
    const handleONclick = (e)=>{
        console.log(e);
        if(e.requestType.includes("eventChanged")){
            const data = e.data[0]
            sendNotification({_class:data.Subject,des:data.Description,start:data.StartTime,end:data.EndTime})
        }
    }
    return(
        <div className="tabelPanel">
            <ScheduleComponent actionComplete={handleONclick}  height='600px' selectedDate={new Date()} eventSettings={{dataSource:data}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    );
}
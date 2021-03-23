import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataScheduleClass } from '../../services/ClassService';
import './Schemal.scss';
export default function TableSchemal(){
const data = useSelector(state=>state.Class.schedule);
const dispatch = useDispatch();
useEffect(()=>{
    GetDataScheduleClass(dispatch)
    .then(data =>{
        console.log(data);
    })
},[])
    return(
        <div className="tabelPanel">
            <ScheduleComponent height='600px' selectedDate={new Date()} eventSettings={{dataSource:data}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    );
}
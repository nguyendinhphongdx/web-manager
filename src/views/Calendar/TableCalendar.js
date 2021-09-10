import { useDispatch, useSelector } from 'react-redux';
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
const TableCalendar = ()=>{
    const data = useSelector(state=>state.Calendar.schedule);
    console.log(useSelector(state=>state));
    const handleONclick = (arg)=>{
        if(arg.requestType.includes("eventChanged")){
            const data = arg.data[0]
            console.log(data);
        }
    }
    return(
        <div className="tabelPanel">
            <ScheduleComponent actionComplete={handleONclick} isAllDay={true} height='80%' selectedDate={new Date()} eventSettings={{dataSource:data}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    );
}
export default TableCalendar;
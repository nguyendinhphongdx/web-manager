import { Badge } from "antd";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './Schemal.scss';
export default function TableSchemal(){
  const data = [
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
          console.log(getDaysInMonth(3,2021));
    return(
        <div className="tabelPanel">
            <ScheduleComponent height='550px' selectedDate={new Date(2021, 1, 15)} eventSettings={{dataSource:data}}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    );
}
function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push({date:new Date(date).getDate(),day:new Date(date).getDay()+1});
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
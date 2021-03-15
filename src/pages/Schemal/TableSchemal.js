import { Badge, Calendar } from "antd";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import './Schemal.scss';
export default function TableSchemal(){
   
    return(
        <div className="tabelPanel">
            <ScheduleComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
            {/* <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} /> */}
        </div>
        
    );
}
function getListData(value) {
    let listData;
    console.log(value.day()+2);
    switch (value.day()+2) {
      case 2:
        listData = [
          { type: 'warning', content: '1810A05' },
          { type: 'success', content: '1810A05' },
        ];
        break;
      case 3:
        listData = [
          { type: 'warning', content: '1810A05' },
          { type: 'success', content: '1810A05' },
          { type: 'error', content: '1810A05' },
        ];
        break;
      case 4:
        listData = [
          { type: 'warning', content: '1810A05' },
          { type: 'success', content: '1810A05' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
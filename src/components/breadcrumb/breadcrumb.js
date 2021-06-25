import { Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom';
import './breadcrumb.scss';
export default function BreadcrumbComponent(props){
    const history = useHistory();
    var bread = '';
    switch(history.location.pathname){
        case '/home': bread ='trang chủ'; break;
        case '/schemal': bread ='lịch học'; break;
        case '/professor': bread ='Giảng viên'; break;
        case '/students': bread ='học sinh'; break;
        case '/subject': bread ='môn học'; break;
        case '/class': bread ='lớp học'; break;
        default: bread = 'default'; break;
    }
   return(
       <div className="breadcrumb">
        <Breadcrumb style={{ margin: '7px 0' }}>
                <Breadcrumb.Item>Ứng dụng</Breadcrumb.Item>
                <Breadcrumb.Item>{bread}</Breadcrumb.Item>
                {/* <Breadcrumb.Item>{history.location.pathname}</Breadcrumb.Item> */}
        </Breadcrumb>
        
       </div>
    
   )
}
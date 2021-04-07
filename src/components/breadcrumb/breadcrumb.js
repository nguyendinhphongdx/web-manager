import { Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom';
import './breadcrumb.scss';
export default function BreadcrumbComponent(props){
    const history = useHistory();
    console.log(history);
   return(
       <div className="breadcrumb">
        <Breadcrumb style={{ margin: '7px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                <Breadcrumb.Item>{history.location.pathname}</Breadcrumb.Item>
        </Breadcrumb>
        
       </div>
    
   )
}
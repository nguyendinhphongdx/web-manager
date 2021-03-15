import { List, Card } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataDocument } from '../../services/DocumentService';
import CardUpload from './CardUpload';
export default function ListCardUpload(){
    const documentRedux = useSelector(state=>state.Document.documents)
    const dispatch = useDispatch()
    useEffect(()=>{
      GetDataDocument(dispatch)
      .then(documents =>{
        console.log(documents);
      })
    },[])
    return(
        <div className="ListCardUpload">
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 4,
        }}
        dataSource={documentRedux}
        renderItem={item => (
          <List.Item>
            <CardUpload record={item}/>
          </List.Item>
        )}
      />
        </div>
    );
}
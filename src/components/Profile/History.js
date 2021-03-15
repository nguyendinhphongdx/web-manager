import { Avatar, List } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDataHistory } from "../../services/HistoryService";

export default function History(){
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
    const dispatch =useDispatch();
    const historyRedux = useSelector(state=>state.History.histories);
    useEffect(()=>{
      GetDataHistory(dispatch)
      .then(data=>{
        console.log(data);
      })
    },[]);
    return(
        <div className="HistoryPage">
              <List
            itemLayout="horizontal"
            dataSource={historyRedux}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={`user: ${item.user} - address: ${item.remoteAddress}`}
                description={item.path}
                />
                <div style={{marginRight:'20px'}}>{item.content}</div>
            </List.Item>
            )}
        />
        </div>
    );
}
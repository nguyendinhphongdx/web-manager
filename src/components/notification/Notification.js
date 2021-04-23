import { Avatar, List } from "antd";
import batman from '../../images/batman.jpg';
export default function Notification(){
    const data = [
        {
          title: 'Web Design Title 1',
        },
        {
          title: 'Web Design Title 2',
        },
        {
          title: 'Web Design Title 3',
        },
        {
          title: 'Web Design Title 4',
        },
      ];
    return(
            <List
            itemLayout="horizontal"
            style={{width:'400px'}}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src={batman} />}
                title={<a href="#">{item.title}</a>}
                description="Web Design, a design language for background "
                />
            </List.Item>
            )}
        />
    );
}
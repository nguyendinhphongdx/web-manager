import { List, Card } from 'antd';
import CardUpload from './CardUpload';
export default function ListCardUpload(){
    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
        {
          title: 'Title 5',
        },
        {
          title: 'Title 6',
        },
        {
            title: 'Title 1',
          },
          {
            title: 'Title 2',
          },
          {
            title: 'Title 3',
          },
          {
            title: 'Title 4',
          },
          {
            title: 'Title 5',
          },
          {
            title: 'Title 6',
          },
      ];
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
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <CardUpload record={item}/>
          </List.Item>
        )}
      />
        </div>
    );
}
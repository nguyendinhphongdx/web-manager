import { Tabs } from "antd";
import BaseSetting from "../../components/Profile/BaseSetting";
import History from "../../components/Profile/History";
import './profilePage.scss';
const { TabPane } = Tabs;

export default function ProfilePage(){
    return(
        <div className="profilePage">
            <Tabs tabPosition={'left'}>
          <TabPane tab="Basic Setting" key="1">
            <BaseSetting/>
          </TabPane>
          <TabPane tab="History" key="2">
            <History/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
        </div>
        
    );
}
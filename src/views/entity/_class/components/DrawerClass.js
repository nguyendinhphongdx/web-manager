import { TeamOutlined, SendOutlined } from "@ant-design/icons";
import React from "react";
import { Drawer, Image, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import convertKB from "../../../../helpers/convertKB";
import HelperClass from "../../../../helpers/helpers";
import MessageServices from "../../../../redux/services/MessageServices";
import ImageComponent from "../../../../common/components/image";
import { SERVER_NODE } from "../../../../axios/configAPI";
export function DrawerClass(props) {
  const { students, record, professor } = props;
  const [state, setState] = useState({
    childrenDrawer: false,
    childrenSelected: null,
    message: "",
  });
  const dispatch = useDispatch();
  const idCurrentUser = JSON.parse(
    localStorage.getItem("currentUser") || { _id: null }
  )._id;
  const messages = useSelector(state => state.Message.messages);
  const studentRedux = useSelector(state => state.Student.students);
  const studentInClass = HelperClass.filterStudentInClass(
    students,
    studentRedux
  );
  const selectChildren = student => {
    setState({
      ...state,
      childrenDrawer: true,
      childrenSelected: student,
    });
  };
  const sendMessage = () => {
    if (state.message != "") {
      const message = {
        idFrom: idCurrentUser,
        timestamp: new Date().getTime(),
        message: state.message,
      };
      MessageServices.ChatAddMessage(dispatch, message);
      setState({
        ...state,
        message: "",
      });
    }
  };
  const element = studentInClass.map((student, index) => {
    return (
      <Menu.Item
        key={student ? student._id : "id errror"}
        onClick={() => selectChildren(student)}
      >
        {student ? student.name : "name error"}
      </Menu.Item>
    );
  });
  const elementsMessage = messages.map((item, index) => {
    if (item.idFrom == idCurrentUser) {
      return (
        <div className="message-item me">
          <p className="me message">{item.message}</p>
        </div>
      );
    } else {
      return (
        <div className="group-other" style={{display:'flex'}}>
           { state.childrenSelected &&  <ImageComponent size={30} url={state.childrenSelected.image} type="student" />}
          <div className="other message-item">
            <p className="other message">{item.message}</p>
          </div>
        </div>
      );
    }
  });
  const { schedule1, schedule2 } = record;
  const menuSchedule1 = convertKB.convertScheduleClass(schedule1);
  const menuSchedule2 = convertKB.convertScheduleClass(schedule2);

  return (
    <Menu theme="light" defaultOpenKeys={["students"]} mode="inline">
      <SubMenu key="students" icon={<TeamOutlined />} title=" Member">
        {element}
      </SubMenu>
      <SubMenu key="professor" icon={<TeamOutlined />} title=" Professor">
        <Menu.Item key={0}>{professor}</Menu.Item>
      </SubMenu>
      <SubMenu key="Schedule" icon={<TeamOutlined />} title=" Schedule">
        <Menu.Item key={1}>{menuSchedule1}</Menu.Item>
        <Menu.Item key={2}>{menuSchedule2}</Menu.Item>
      </SubMenu>
      {state.childrenSelected && (
        <Drawer
          title={`${state.childrenSelected.name}`}
          width={320}
          closable={false}
          onClose={() => setState({ ...state, childrenDrawer: false })}
          visible={state.childrenDrawer}
        >
          <div className="wrapper-message">
            <div className="content-message">{elementsMessage}</div>
            <div className="footer-input">
              <input
                type="text"
                placeholder="Enter your message"
                value={state.message}
                onInput={mesage =>
                  setState({ ...state, message: mesage.target.value })
                }
              />
              <div className="icon" onClick={() => sendMessage()}>
                <SendOutlined style={{ fontSize: 25 }} />
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </Menu>
  );
}

import { TeamOutlined, SendOutlined } from "@ant-design/icons";
import React, { useEffect, useRef,useContext } from "react";
import { Drawer, Image, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import convertKB from "../../../../helpers/convertKB";
import HelperClass from "../../../../helpers/helpers";
import MessageServices from "../../../../redux/services/MessageServices";
import ImageComponent from "../../../../common/components/image";
import  GlobalContext  from "../../../../contexts/globalContext";
export function DrawerClass(props) {
  const { students, record, professor } = props;
  const globalContext = GlobalContext;
  const [state, setState] = useState({
    childrenDrawer: false,
    childrenSelected: null,
    message: "",
  });
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();
  const CurrentUser = JSON.parse(
    localStorage.getItem("currentUser") || { _id: null,name:null }
  );
  const messages = useSelector(state => state.Message.messages);
  const studentRedux = useSelector(state => state.Student.students);
  const studentInClass = HelperClass.filterStudentInClass(
    students,
    studentRedux
  );
  const selectChildren = student => {
    const body = {
      users:[
        CurrentUser._id,student._id
      ]
    }
    globalContext.setStudentSelected(student);
    //setSelectedMessage(null,student)
    // MessageServices.SelecteStudentMessage(dispatch,student);

    MessageServices.GetAllMessage(dispatch,body)
    setState({
      ...state,
      childrenDrawer: true,
      childrenSelected: student,
    });
  };
  const sendMessage = () => {
   
    if (state.message != "") {
      const body = {
        users:[
          CurrentUser._id,state.childrenSelected._id
       ],
       message:{
           userSendId:CurrentUser._id,
           userReceiveId:state.childrenSelected._id,
           message:state.message,
           type:"text",
           displayName:CurrentUser.user_name,
           time:new Date().getTime()
       }
      };
      MessageServices.ChatAddMessage(dispatch, body);
      setState({
        ...state,
        message: "",
      });
      
    }
  };
  const handleKeyPress = (event)=>{
    switch(event.code){
      case "Enter": sendMessage(); break
    }
  }
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
    const lastMessage =index==messages.length-1?'last-message':'';
    if (state.childrenSelected && item.userSendId == state.childrenSelected._id) {
      return (
        <div key={index} id={`${lastMessage}`} className="group-other">
           { state.childrenSelected &&  <ImageComponent size={30} url={state.childrenSelected.image} type="student" />}
          <div className="other message-item" >
            <p className="other message">{item.message}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} id={`${lastMessage}`} className="message-item me">
          <p className="me message">{item.message}</p>
        </div>
      );
    }
  });
  const { schedule1, schedule2 } = record;
  const menuSchedule1 = convertKB.convertScheduleClass(schedule1);
  const menuSchedule2 = convertKB.convertScheduleClass(schedule2);
  const scrollBottom =()=>{
    if(messagesEndRef.current){
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEffect(()=>{
    console.log("scrolling");
    scrollBottom();
  },[messages])
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
          footer={
            <div className="footer-input">
              <input
                type="text"
                id="input-message"
                onKeyPress={handleKeyPress}
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
          }
        >
          <div className="wrapper-message" id="wrapper-message">
            <div className="content-message" >{elementsMessage}</div>
            <div className="" ref={messagesEndRef}/>
          </div>
        </Drawer>
      )}
    </Menu>
  );
}

import React, { useEffect,useContext } from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import SocketInstant from "../socket.io/index";
import MessageServices from "../redux/services/MessageServices";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import GlobalContext from "../contexts/globalContext";
import ClassServices from "../redux/services/ClassServices";

const TheLayout = () => {
  const dispatch = useDispatch();
  let classes = [];
  const globalContext = GlobalContext;
  const handleChat = msg => {
    const {studentSelected,classSelected} = globalContext.getState();
    console.log(classes,classSelected);
    if (classSelected && classes) {
      const classFilted = classes.find(item => item._id == classSelected._id);
       console.log(classFilted);
      if (
        classFilted &&
        msg.message &&
        classFilted.professor[0] == msg.message.userReceiveId
      ) {
        
        if (studentSelected._id == msg.message.userSendId) {
          MessageServices.RecevieAddMessage(dispatch, msg.message);
        }else{
          message.info(`${msg.message.message} from ${msg.message.displayName}`);
        }
      }
    } else {
      message.info(`${msg.message.message} from ${msg.message.displayName}`);
    }
  };
  const getClass = async()=>{
    classes = await ClassServices.GetDataClass(dispatch);
  }
  useEffect(() => {
    globalContext.initState();
    getClass()
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || `{}`);
    if (currentUser) {
      SocketInstant.initiateSocket(null, currentUser._id || "");
      SocketInstant.subscribeToChat(handleChat);
    }
  }, []);
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;

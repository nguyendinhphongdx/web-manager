import { MessageConstant } from "../config/constant";
class MessageActions {
  Get_All_Message = messages => {
    return {
      type: MessageConstant.GET_DATA_MESSAGE,
      payload: messages,
    };
  };
  Chat_Add_Message = message => {
    return {
      type: MessageConstant.ADD_MESSAGE,
      payload: message,
    };
  };
  Selecte_Class_Chat = _class => {
    return {
      type: MessageConstant.SELECT_CLASS,
      payload: _class,
    };
  };
  Selecte_Student_Chat = student => {
    return {
      type: MessageConstant.SELECT_STUDENT_CHAT,
      payload: student,
    };
  };
  Receive_Add_Chat = message => {
    return {
      type: MessageConstant.RECEVICE_MESSAGE,
      payload: message,
    };
  };
  Empty_Message = () => {
    return {
      type: MessageConstant.EMPTY_MESSAGE
    };
  };
}
export default new MessageActions();

import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import MessageActions from "../actions/messageActions";
const key = "updatable";
class MessageServices {

  async ChatAddMessage(dispatch,message) {
    //message.loading({ content: "Đang xử lý...", key });
    const action = MessageActions.Chat_Add_Message(message);
    dispatch(action);
    // const request = await sendRequest("/document/documents", "get")
    //   .then(response => {
    //     const action = documentActions.Get_All_Document(response.data);
    //     dispatch(action);
    //     return response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     message.warning({ content: "Fetch Lỗi.", key });
    //   });
    //return request;
  }
}
export default new MessageServices();

import { message } from "antd";
import io from "socket.io-client";
import { SERVER_NODE } from "../axios/configAPI";

class SocketInstant {
    constructor(){
        this.socket = null;
    }
    initiateSocket = (room,userId) => {
        this.socket = io(SERVER_NODE,{
          auth:{userId:userId}
        });
        message.info(`reconnect socket ...`);
        console.log("init socket", this.socket);
        if (this.socket && room) this.socket.emit("join", room);
    };
  disconnectSocket = () => {
    message.info(`disconnect socket ...`);
    if (this.socket) this.socket.disconnect();
  };
  subscribeToChat = cb => {
    if (!this.socket) return true;
    this.socket.on("chat", msg => {
      console.log("Websocket event received!");
      return cb(null, msg);
    });
  };
  sendNotification = message => {
    console.log("send socket", this.socket);
    if (this.socket) this.socket.emit("notif", { message });
  };
  EmitInterval = () => {
    console.log("emit socket", this.socket);
    if (this.socket)
      setInterval(() => {
        message.info("just emit to clients");
        this.socket.emit("change_schedule", "data schedule");
      }, 5000);
  };
}
export default new SocketInstant();


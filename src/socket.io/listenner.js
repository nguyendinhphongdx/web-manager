import { message } from 'antd';
import io from 'socket.io-client';
import { NODE_SERVER, NODE_SOCKET } from '../axios/configAPI';
let socket;
export const initiateSocket = (room) => {
  socket = io(NODE_SOCKET);
  message.info(`Connecting socket...`);
  console.log('init socket',socket);
  if (socket && room) socket.emit('join', room);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}
export const subscribeToChat = (cb) => {
  if (!socket) return(true);
  socket.on('chat', msg => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}
export const sendNotification = (message) => {
  console.log('send socket',socket);
    if (socket) socket.emit('notif', { message });
  }
export const EmitInterval = () => {
  console.log('emit socket',socket);
  if (socket)  setInterval(()=>{
      message.info('just emit to clients');
      socket.emit('change_schedule','data schedule');
    },5000)
}

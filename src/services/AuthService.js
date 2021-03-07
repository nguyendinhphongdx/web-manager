import { message } from "antd";
import { Redirect } from "react-router";
import sendRequest from "../axios/API";
import { adminLogin } from "../redux/actions/adminAction";

const key = 'updatable';
export  function checkTokenLocal(){
    const isExist = localStorage.getItem('token') || '';
    console.log(isExist===''?false:true);
    return  isExist===''?false:true;
}
export async function OnLogin(dispatch,data,history){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('login','post',data)
    .then(data =>{
        const action = adminLogin(data[0])
        dispatch(action);
        console.log('redirectting....');
        history.replace('/home');
    })
    .catch((error) =>{
        console.log(error);
        if(error.response.status ===401){
            message.warning({ content: 'Sai thông tin tài khoản.', key });
        }
    })
    return request
}
export function OnLogout(){
    message.loading({ content: 'Đăng xuất thành công 1', key });
    window.location = '/login';
}
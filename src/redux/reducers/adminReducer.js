import { message } from 'antd';
import * as constants from '../constants';
const initialState={
    token:null,
    admin:{}
}
const key='updatable'
const admin =(state = initialState, action)=>{
    switch(action.type){
        case constants.ADMIN_LOGIN: {
            console.log(action);
            const { payload } = action; // Aadmin
            message.success({ content: 'Đăng nhập thành công!', key, duration: 2 });
            localStorage.setItem('token', JSON.stringify(payload.token));
            return {
                ...state,
                admin: payload.user,
                token:payload.token
            };
        }
        case constants.ADMIN_LOGOUT: {
            const { payload } = action; // Aadmin
            message.success({ content: 'Đăng xuất thành công!', key, duration: 2 });
            window.location = '/login';
            localStorage.clear();
            break;
        }
        default: return {...state}
    }
}
export default admin;
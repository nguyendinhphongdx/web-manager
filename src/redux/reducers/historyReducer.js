import { message } from 'antd';
import * as constants from '../constants';
const initialState={
    histories:[]
}
const key='updatable'
const history =(state = initialState, action)=>{
    switch(action.type){
        case constants.GET_ALL_HISTORY: {
            const { payload } = action; // list item
            message.success({ content: 'Fetch danh sách lịch sử thành công !', key, duration: 2 });
            return {
                ...state,
                histories: payload
            };
        }
        default: return {...state}
    }
}
export default history;
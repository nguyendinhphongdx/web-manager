import { message } from 'antd';
import {MessageConstant} from '../config/constant';
const initialState={
    messages: [],
    classSelected:null,
    studentSelected:null
}
const key='updatable'
const messages =(state = initialState, action)=>{
    switch(action.type){
        case MessageConstant.GET_DATA_MESSAGE: {
            const { payload } = action; // list item
            return {
                ...state,
                messages: payload
            };
        }
        case MessageConstant.ADD_MESSAGE: {
            const { payload } = action; // list item
            return {
                ...state,
                messages: [...state.messages,payload]
            };
        }
        case MessageConstant.RECEVICE_MESSAGE: {
            const { payload } = action; // list item
            return {
                ...state,
                messages: [...state.messages,payload]
            };
        }
        case MessageConstant.SELECT_CLASS: {
            const { payload } = action; // list item
            return {
                ...state,
                classSelected: payload
            };
        }
        case MessageConstant.SELECT_STUDENT_CHAT: {
            const { payload } = action; // list item
            return {
                ...state,
                studentSelected: payload
            };
        }
        case MessageConstant.EMPTY_MESSAGE: {
            return {
                ...state,
                studentSelected: null,
                classSelected: null,
                messages:[]
            };
        }
        default: return {...state}
    }
}
export default messages;
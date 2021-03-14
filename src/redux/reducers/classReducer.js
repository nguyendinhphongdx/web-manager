import { message } from 'antd';
import * as constants from '../constants';
const initialState={
    classes:[],
    chart:[]
}
const key='updatable'
const _class =(state = initialState, action)=>{
    switch(action.type){
        case constants.GET_ALL_CLASS: {
            const { payload } = action; // list item
            console.log(payload);
            message.success({ content: 'Fetch danh sách Class thành công !', key, duration: 2 });
            return {
                ...state,
                classes: payload
            };
        }
        case constants.ADD_CLASS: {
            const { payload } = action; // item addd
            const _newList = [...state.classes];
            _newList.push(payload);
            message.success({ content: 'Thêm Class thành công !', key, duration: 2 });
            return {
                ...state,
                classes: _newList
            };
        }
        case constants.UPDATE_CLASS: {
            const { payload } = action; // item update
            let classes = [...state.classes];
           const new_classes = classes.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật lớp thành công!', key, duration: 2 });
           
            return {
                ...state,
                classes: new_classes
            };
        }
        case constants.REMOVE_CLASS: {
            const { payload } = action; // item remoce
            let classes = [...state.classes];
            const _newClass = classes.filter(item => item._id !== payload);
            console.log('inreducer',_newClass);
           message.success({ content: 'Xóa lớp thành công!', key, duration: 2 });
            return {
                ...state,
                classes: _newClass
            };
        }
        case constants.GET_DATA_CHART: {
            const { payload } = action; // arr
           message.success({ content: 'Fetch data chart thành công!', key, duration: 2 });
            return {
                ...state,
                chart: payload
            };
        }
        default: return {...state}
    }
}
export default _class;
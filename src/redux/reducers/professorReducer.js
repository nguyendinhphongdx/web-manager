import { message } from 'antd';
import * as constants from '../constants';
const initialState={
    professores:[]
}
const key='updatable'
const professor =(state = initialState, action)=>{
    switch(action.type){
        case constants.GET_ALL_PROFESSOR: {
            const { payload } = action; // list item
            console.log(payload);
            message.success({ content: 'Fetch danh sách Giảng Viên thành công !', key, duration: 2 });
            return {
                ...state,
                professores: payload
            };
        }
        case constants.ADD_PROFESSOR: {
            const { payload } = action; // item addd
            const _newList = [...state.professores];
            _newList.push(payload);
            message.success({ content: 'Thêm Giảng Viên thành công !', key, duration: 2 });
            return {
                ...state,
                professores: _newList
            };
        }
        case constants.UPDATE_PROFESSOR: {
            const { payload } = action; // item update
            let professores = [...state.professores];
           const new_professores = professores.map(item => {
               if(item._id===payload._id){
                    return payload;
               } else return item;
           })
           message.success({ content: 'Cập nhật Giảng Viên thành công!', key, duration: 2 });
            return {
                ...state,
                professores: new_professores
            };
        }
        case constants.REMOVE_PROFESSOR: {
            const { payload } = action; // item remoce
            let professores = [...state.professores];
            const _newProfessors = professores.filter(item => item._id !== payload._id);
           message.success({ content: 'Xóa Giảng Viên thành công!', key, duration: 2 });
            return {
                ...state,
                professores: _newProfessors
            };
        }
        case constants.CHANGE_AVATAR_PROFESSOR: {
            const { payload } = action; // name iamge
            let professores = [...state.professores];
            const new_professores = professores.map(item => {
                if(item._id===payload.idProfessor){
                     return payload;
                } else return item;
            })
           message.success({ content: 'Đổi Avatar thành công!', key, duration: 2 });
            return {
                ...state,
                professores: new_professores
            };
        }
        default: return {...state}
    }
}
export default professor;
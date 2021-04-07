import * as constants from '../constants';
export const Get_All_Professor=(professores) => {
     return {
        type: constants.GET_ALL_PROFESSOR,
        payload: professores
    }
}
export const Add_Professor=(professor) => {
    return {
       type: constants.ADD_PROFESSOR,
       payload: professor
   }
}
export const Update_Professor=(professor) => {
    return {
       type: constants.UPDATE_PROFESSOR,
       payload: professor
   }
}
export const Remove_Professor=(professor) => {
    return {
       type: constants.REMOVE_PROFESSOR,
       payload: professor
   }
}
export const Change_Avatar_Professor=(idProfessor,image) => {
    return {
       type: constants.CHANGE_AVATAR_PROFESSOR,
       payload: {idProfessor,image}
   }
}
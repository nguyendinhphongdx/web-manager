import * as constants from '../constants';
export const Get_All_Student=(students) => {
     return {
        type: constants.GET_ALL_STUDENT,
        payload: students
    }
}
export const Add_Student=(student) => {
    return {
       type: constants.ADD_STUDENT,
       payload: student
   }
}
export const Update_Student=(student) => {
    return {
       type: constants.UPDATE_STUDENT,
       payload: student
   }
}
export const Remove_Student=(student) => {
    return {
       type: constants.REMOVE_STUDENT,
       payload: student
   }
}
export const Change_Avatar_Student=(idStudent,image) => {
    return {
       type: constants.CHANGE_AVATAR_STUDENT,
       payload: {idStudent,image}
   }
}
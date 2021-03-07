import * as constants from '../constants';
export const Get_All_Subject=(subjects) => {
     return {
        type: constants.GET_ALL_SUBJECT,
        payload: subjects
    }
}
export const Add_Subject=(subject) => {
    return {
       type: constants.ADD_SUBJECT,
       payload: subject
   }
}
export const Update_Subject=(subject) => {
    return {
       type: constants.UPDATE_SUBJECT,
       payload: subject
   }
}
export const Remove_Subject=(subject) => {
    return {
       type: constants.REMOVE_SUBJECT,
       payload: subject
   }
}

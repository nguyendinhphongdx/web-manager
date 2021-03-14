import * as constants from '../constants';
export const Get_All_Class=(classes) => {
     return {
        type: constants.GET_ALL_CLASS,
        payload: classes
    }
}
export const Add_Class=(_class) => {
    return {
       type: constants.ADD_CLASS,
       payload: _class
   }
}
export const Update_Class=(_class) => {
    return {
       type: constants.UPDATE_CLASS,
       payload: _class
   }
}
export const Remove_Class=(_class) => {
    return {
       type: constants.REMOVE_CLASS,
       payload: _class
   }
}
export const Assign_Professor=(_class) => {
    return {
       type: constants.ASSIGIN_FROFESSOR,
       payload: _class
   }
}
export const Add_Member=(_class) => {
    return {
       type: constants.ADD_MEMBER,
       payload: _class
   }
}
export const Get_Data_Chart=(arr) => {
    return {
       type: constants.GET_DATA_CHART,
       payload: arr
   }
}
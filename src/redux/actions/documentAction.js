import * as constants from '../constants';
export const Get_All_Document=(documents) => {
     return {
        type: constants.GET_ALL_DOCUMENT,
        payload: documents
    }
}
export const Add_Document=(document) => {
    return {
       type: constants.ADD_DOCUMENT,
       payload: document
   }
}
export const Update_Document=(document) => {
    return {
       type: constants.UPDATE_DOCUMENT,
       payload: document
   }
}
export const Remove_Document=(idDocument) => {
    return {
       type: constants.REMOVE_DOCUMENT,
       payload: idDocument
   }
}
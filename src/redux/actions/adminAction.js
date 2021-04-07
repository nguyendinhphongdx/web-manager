import * as constants from '../constants';
export const adminLogin=({token,user}) => {
     return {
        type: constants.ADMIN_LOGIN,
        payload: {token,user}
    }
}
export const adminLogout=(admin) => {
    return {
       type: constants.ADMIN_LOGOUT,
       payload: admin
   }
}
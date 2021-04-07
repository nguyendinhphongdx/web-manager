import * as constants from '../constants';
export const Get_All_History=(history) => {
     return {
        type: constants.GET_ALL_HISTORY,
        payload: history
    }
}


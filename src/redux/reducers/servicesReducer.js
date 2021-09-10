import ServiceConvertor from '../../helpers/converter';
import {ServiceConstants} from '../config/constant';
const initialState = {
    services: [],
    result:{},
    serviceEdit:null
};
const key = 'updatable';

const service = (state = initialState, action) => {
    switch (action.type) {
        case ServiceConstants.GET_ALL_SERVICE: {
            const { payload } = action; // list payload
            console.log('====================================');
            console.log(ServiceConvertor.convertServices(payload));
            console.log('====================================');
            return {
                ...state,
                services: ServiceConvertor.convertServices(payload)
            };
        }
        case ServiceConstants.EXEC_SERVICE: {
            const { payload } = action; // list payload
            return {
                ...state,
                result: payload
            };
        }
        case ServiceConstants.REFRESH_RESULT: {
            return {
                ...state,
                result: []
            };
        }
        case ServiceConstants.SET_SERVICE_EDIT: {
            return {
                ...state,
                serviceEdit: action.payload
            };
        }
        default: return { ...state };
    }
};

export default service;

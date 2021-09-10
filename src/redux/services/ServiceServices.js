import { message } from 'antd';
import sendRequest from '../../axios/requestAPI';
import { Action_Exec_Service, Action_Get_All_Service, Action_Refresh_Result, Set_Service_Edit } from '../actions/serviceActions';
export const Query_All_Service = async (dispatch) => {
  const result = await sendRequest('/services/queryAll', 'get')
    .then(items => {
      const data = items.data;
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      const action = Action_Get_All_Service(data);
      dispatch(action);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}
export const Exec_Service = async (dispatch, endpoint, method) => {
  const result = await sendRequest(`/services/${endpoint}`, method)
    .then(items => {
      const data = items.data;
      if (data) {
        const action = Action_Exec_Service(data);
        dispatch(action);
      } else {
        const action = Action_Exec_Service(items);
        dispatch(action);
      }
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}
export const Refresh_Resutt = (dispatch) => {
  const action = Action_Refresh_Result();
  dispatch(action);
}
export const Add__Service = async (dispatch, body) => {
  const result = await sendRequest('/services/newService', 'post', body)
    .then(items => {
      if (!items || items.status != 200) {
        throw new Error(items.message);
      } else {
        const data = items.data;
        console.log('====================================');
        console.log('item', items);
        const action = Action_Get_All_Service(data);
        dispatch(action);
        return data;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return result;
}
export const Update_Service = async (dispatch, body) => {
  const result = await sendRequest('/services/updateService', 'post', body)
    .then(items => {
      if (!items || items.status != 200) {
        throw new Error(items.message);
      } else {
        const data = items.data;
        console.log('====================================');
        console.log('item', items);
        const action = Action_Get_All_Service(data);
        dispatch(action);
        return data;
      }
    })
    .catch((error) => {
      console.log(error);
      message.error('Error');
    });
  return result;
}
export const Delete_Method = async (dispatch, body) => {
  const result = await sendRequest('/services/delete_method', 'post', body)
    .then(items => {
      if (!items || items.status != 200) {
        throw new Error(items.message);
      } else {
        const data = items.data;
        console.log('====================================');
        console.log('item', items);
        const action = Action_Get_All_Service(data);
        dispatch(action);
        return data;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return result;
}
export const Delete_Service = async (dispatch, nameService) => {
  const result = await sendRequest(`/services/delete/${nameService}`, 'post')
    .then(items => {
      if (!items || items.status != 200) {
        throw new Error(items.message);
      } else {
        const data = items.data;
        console.log('====================================');
        console.log('item', items);
        const action = Action_Get_All_Service(data);
        dispatch(action);
        return data;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return result;
}
export const Set_Service_Config = (dispatch, service) => {
  const action = Set_Service_Edit(service);
  dispatch(action);
}

export const Service_Get_List_Key = async (dispatch, body) => {
  const result = await sendRequest(`/services/getKeys`, 'post',body)
    .then(items => {
      if (!items || items.status != 200) {
        throw new Error(items.message);
      } else {
        const data = items.data;
        console.log('====================================');
        console.log('item', items);
        return data;
      }
    })
    .catch((error) => {
      alert(error);
    });
  return result;
}
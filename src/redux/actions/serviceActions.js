import { ServiceConstants } from "../config/constant";

export const Action_Get_All_Service = services => {
  return {
    type: ServiceConstants.GET_ALL_SERVICE,
    payload: services,
  };
};
export const Action_Exec_Service = result => {
  return {
    type: ServiceConstants.EXEC_SERVICE,
    payload: result,
  };
};
export const Action_Refresh_Result = () => {
  return {
    type: ServiceConstants.EXEC_SERVICE,
  };
};
export const Set_Service_Edit = service => {
  return {
    type: ServiceConstants.SET_SERVICE_EDIT,
    payload: service,
  };
};

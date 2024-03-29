import { message } from "antd";
import sendRequest from "../../axios/requestAPI";
import converter from "../../helpers/converter";
import { QueryAll_User } from "../actions/userActions";

class UserService {
  LoginService = async body => {
    const result = await sendRequest(body.role==1?"/login":"/professor/login", "post", body)
      .then(result => {
        if (result && result.data) {
          return result.data[0];
          
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error.message);
      });
    return result;
  };
  SignUpService = async body => {
    const result = await sendRequest("/user/registry", "post", body)
      .then(result => {
       
        if (result && result.data) {
          return result.data;
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error.message);
        console.log(error.message);
      });
    return result;
  };
  QueryAll = async (dispatch) => {
    const result = await sendRequest("/user/queryAll", "get")
      .then(result => {
        if (result && result.data) {
          const action = QueryAll_User(converter.convertUsers(result.data));
          dispatch(action)
          return result.data;
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error.message);
      });
    return result;
  };
  DeleteUser = async (Id,dispatch) => {
    const result = await sendRequest(`/user/${Id}`, "delete")
      .then(result => {
        if (result && result.data) {
          const action = QueryAll_User(converter.convertUsers(result.data));
          dispatch(action)
          return result.data;
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error.message);
      });
    return result;
  };
  GetQrcodeOPT = async body => {
    const result = await sendRequest("/login/opt", "post", body)
      .then(result => {
        if (result && result.data) {
          return result.data;
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error?.response?.data?.message ||error.message);
      });
    return result;
  };
  VerifyOPT = async body => {
    const result = await sendRequest("/login/verify", "post", body)
      .then(result => {
        if (result && result.data) {
          return result.data;
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        message.error(error?.response?.data?.message ||error.message);
      });
    return result;
  };
}
export default new UserService();

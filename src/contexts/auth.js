import { message } from "antd";
import React, { createContext, useState } from "react";
import helpers from "../helpers/helpers";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const storeToken = helpers.VerifyToken(localStorage.getItem("token"));
  const [token, setToken] = useState(storeToken || null);
  const [isVerified, setIsVerified] = useState(false);

  //context data
  const login = (storage, history, from) => {
    setToken(storage.token);
    message.success("Login successful");
    localStorage.setItem("token", storage.token);
    localStorage.setItem("currentUser", JSON.stringify(storage.currentUser));
    localStorage.setItem("date", helpers.getDateNowString());
    history.push(from.pathname);
  };
  const logout = history => {
    setToken(null);
    setIsVerified(false);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("date");
    history.push("/login");
    // SocketInstant.disconnectSocket();
  };
  const verify = (verify,history,from) =>{
    setIsVerified(verify);
    history.push(from.pathname);
  }
  const tokenContextData = {
    token: token,
    login: login,
    logout: logout,
    isVerified: isVerified,
    verify:verify
  };
  // return provider
  return (
    <AuthContext.Provider value={tokenContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

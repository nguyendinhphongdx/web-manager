import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { Image, message } from "antd";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../assets/icons/grafana_icon.png";
import OtpInput from "../../../common/components/InputOPT";
import { AuthContext } from "../../../contexts/auth";
import UserService from "../../../redux/services/UserServices";
import { ReloadOutlined } from "@ant-design/icons";
import helpers from "../../../helpers/helpers";
import { useDispatch } from "react-redux";
const Verify = props => {
  const { from } = props.location.state || { from: { pathname: "/dashboard" } };
  const [state, setState] = useState({ opt: "" });
  const [qrcode, setQrcode] = useState(null);
  const [expired, setExpired] = useState(false);
  const [step, setStep] = useState(30);
  const [disable, setDisable] = useState(false);
  const [countDown, setCountDown] = useState(-1);
  const dispatch = useDispatch();
  const timer = useRef(0);
  let history = useHistory();
  const { verify } = useContext(AuthContext);
  const userID = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))["_id"]
    : null;
  const handleChange = opt => {
    setState({ opt });
  };
  const handleOnVerify = async () => {
    helpers.SetLoading(true,dispatch);
    const body = {
      userID,
      token: state.opt,
    };
    const response = await UserService.VerifyOPT(body).finally(()=>  helpers.SetLoading(false,dispatch));
    if (response.status == true) {
      verify(true, history, from);
    } else {
      message.info("Verify Result: " + response.status);
    }
  };
  const handleCallQrCode = async () => {
    setExpired(false);
    if (userID) {
      const response = await UserService.GetQrcodeOPT({ userID: userID });
      setQrcode(response.dataBase64);
      setStep(response.step);
    } else {
      message.error("Vui lòng đăng nhập lại!");
    }
  };
  useEffect(async () => {
    message.destroy();
    handleCallQrCode();
    setCountDown(step);
    const setExpiredQrCode = setTimeout(() => {
      setExpired(true);
      console.log("clear timeout");
    }, step * 1000);
    return () => {
      clearTimeout(setExpiredQrCode || 1);
      setExpired(false);
    };
  }, [qrcode]);
  useEffect(() => {
    if (state.opt.length == 6) setDisable(false);
    else setDisable(true);
  }, [state]);
  useEffect(() => {
    timer.current = setInterval(() => {
      setCountDown(pre => pre - 1);
    }, 1000);
    
    if(countDown==0) clearInterval(timer.current)
    return () => {
      clearInterval(timer.current);
    };
  }, [countDown]);
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer className="login_container">
        <CRow className="justify-content-center">
          <CCol md="10">
            <CCardGroup>
              <CCol md="7">
                <CCard className="p-10">
                  <CCardBody>
                    <h1 className="title">Enter OPT</h1>
                    <div className="">
                      <p className="text-muted">
                        Use Khoa Bảng Mobile Application to Scan
                      </p>
                    </div>
                    <CRow style={{ marginBottom: 30 }}>
                      <OtpInput
                        value={state.opt}
                        onChange={handleChange}
                        numInputs={6}
                        className={"input-opt"}
                        containerStyle={"row-opt"}
                        separator={<span>*</span>}
                        isInputNum={true}
                      />
                    </CRow>
                    <CRow>
                      <CCol xs="12">
                        <CButton
                          color="success"
                          type="submit"
                          style={{
                            width: "100%",
                            padding: 10,
                            cursor: disable ? "not-allowed" : "pointer",
                          }}
                          className="px-12"
                          disabled={disable}
                          onClick={handleOnVerify}
                        >
                          Confirm OTP
                        </CButton>
                      </CCol>
                    </CRow>
                    <Link to="/login">Back to Login!</Link>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol md="5">
                <CCard className="">
                  <CCardBody className="text-center">
                    <div style={{ position: "relative" }}>
                      <Image
                        src={qrcode || logo}
                        style={{ width: "250px", height: "100%" }}
                      />
                      {expired && (
                        <div
                          onClick={handleCallQrCode}
                          className="qrtimeout"
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            backgroundColor: "rgba(100,100,100,.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ReloadOutlined
                            style={{ fontSize: 50, color: "red" }}
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="title">Scan QR Code {countDown}</h3>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Verify;

import CIcon from '@coreui/icons-react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import { Image, message } from 'antd';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { TypeRoleID } from '../../../anothers/constants';
import logo from "../../../assets/icons/grafana_icon.png";
import { AuthContext } from '../../../contexts/auth';
import { ValidateFormLogin } from '../../../helpers/validateForm';
import UserService from '../../../redux/services/UserServices';
import SocketInstant from '../../../socket.io/index';
const Login = (props) => {
  const {from} = props.location.state || {from:{pathname:'/dashboard'}}
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { login, token } = useContext(AuthContext);
  const onSubmit = (data) => {
    setLoading(!loading);
    const valid = ValidateFormLogin(data);
    if (valid !== true) {
      alert(valid.message);
      setLoading(false);
    } else {
      UserService.LoginService(data)
        .then((result) => {
          if (result) {
            const typeUser = result.role_id;
            // if(typeUser == TypeRoleID.ADMIN || typeUser == TypeRoleID.SUPERUSER){
              if(true){
              const token = result.token;
              console.log(token);
              const storage = {
                token,
                currentUser:result.user
              }
              login(storage, history,from);
              SocketInstant.initiateSocket(null,result.user._id);
            }else{
              message.info('Perrmission Deny');
            }
          }
        })
        .finally(() => {
          setLoading(false);
        })
    }

  }
  const loginFacebook = () =>{
    //accountService.login();
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer className="login_container">
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)} >
                    <h1 className="title">Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="text" className="form-control" placeholder="Tài khoản" {...register('user_name', { required: true })}/>
                    </CInputGroup>
                    {errors.username && <span className="error">This field is required</span>}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="password" className="form-control" placeholder="Mật khẩu" {...register('password', { required: true })}/>
                    </CInputGroup>
                    {errors.password && <span className="error">This field is required</span>}
                    <CRow>
                      <CCol xs="12" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                      <CCol xs="12">
                        <CButton color="primary" type="submit" style={{ width: '100%' }} className="px-12" disabled={loading}>Login</CButton>
                      </CCol>
                      <CCol xs="12">
                        <CButton color="dashed" style={{ width: '100%' }} className="px-12" 
                        onClick={()=> loginFacebook()}
                        >Login With Facebook</CButton>
                      </CCol>
                    </CRow>
                    <Link to="/register">
                      <CButton color="dashed" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-dashed py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div >
                    <Image
                      src={logo}
                      style={{ width: '250px' }}
                    />
                  </div>
                  <div>
                    <h3 className="title">Welcome to GateWay API SOC</h3>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

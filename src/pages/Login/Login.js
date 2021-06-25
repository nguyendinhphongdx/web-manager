import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import logo from '../../images/logo192.png';
import { OnLogin } from '../../services/AuthService';
import { initiateSocket } from '../../socket.io/listenner';
import './loginCss.css';
 export default function Login(){
    const [token,setToken] = useState(()=>localStorage.getItem('token'));
    const history = useHistory();    
    if(token){
        // history.push('/home');
        console.log('token is exits');
    }
    const dispatch = useDispatch();
    const [isClick,setClick] = useState(()=>false);
    document.addEventListener('keypress',function(e){
        console.log();
        if(e.key === 'Enter'){
            const btnLogin = document.getElementById('btn-login');
            if(btnLogin){
                btnLogin.click()
            }
        }
     });
    async function handleOnLogin(data) {  
        setClick(true);
        console.log("calling");
        await OnLogin(dispatch,data,history) // {token,use{}}
        .then(token => {
            if(token){
                // setToken(token)
                history.push('/home');
            }
        })
        console.log("resolve");
        setClick(false);
    }
    const onFinishFailed = err => {
        alert('Vui lòng không để trống thông tin');
    };
    useEffect(()=>{
        initiateSocket()
    },[])
    return(
      <div className="root-login">
          <div id="container-login" >
            <Row id="row-login">
              <Col md="4" id="col-login">
                  <div className="title-login">
                      Member Login
                  </div>
                  <div className="picture-login">
                      <img src={logo} alt=""/>
                  </div>
              </Col>
              <Col id="col-info">
                  <div className="title-login">
                    ĐĂNG NHẬP
                  </div>
                <Form
                    name="normal_login"
                    className="login-form form-login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleOnLogin} 
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item name="user_name" className="group-login"
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập!',
                        },
                        ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                </Form.Item>
                    <Form.Item name="password" className="group-login"
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu!',
                    },
                    ]}
                >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                />
                </Form.Item>
                <Form.Item className="group-login-fuc" style={{margin:'0px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{color: 'white'}}>Ghi nhớ tài khoản</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href>
                Quên mật khẩu
                </a>
                </Form.Item>
                    <Form.Item className="group-login-fuc" style={{margin:'0px'}}>
                        <Button style={{width:'100%',height:'36px'}} id='btn-login' type="primary" htmlType="submit" className="login-form-button" disabled={isClick}>
                       Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item className="group-login-fuc" style={{width:'100%',textAlign:'left',margin:'0px'}}>
                         hoặc <a href>Đăng kí !</a>
                    </Form.Item>
                    
                </Form>
              
              </Col>
          </Row>
          </div>
    </div>
    );
}

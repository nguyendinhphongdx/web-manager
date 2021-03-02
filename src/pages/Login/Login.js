import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import logo from '../../images/logo192.png';
import './loginCss.css';
 export default function Login(){
    //  const dispatch = useDispatch();    
     const [isClick,setClick] = useState(()=>false);
    document.addEventListener('keypress',function(e){
         if(e.key === 'Enter'){
            document.getElementById('btn-login').click();
        }
     });
    async function handleOnLogin(data) {  
        // setClick(true);
        // console.log("calling");
        // await OnLogin(data,dispatch); 
        // console.log("resolve");
        // setClick(false);
    }
    const onFinishFailed = err => {
        alert('Vui lòng không để trống thông tin');
    };
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
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item name="username" className="group-login"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                    <Form.Item name="password" className="group-login"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
                </Form.Item>
                <Form.Item className="group-login-fuc" style={{margin:'0px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{color: 'white'}}>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                </Form.Item>
                    <Form.Item className="group-login-fuc" style={{margin:'0px'}}>
                        <Button style={{width:'100%',height:'36px'}}  type="primary" htmlType="submit" className="login-form-button" >
                        Log in
                        </Button>
                    </Form.Item>
                    <Form.Item className="group-login-fuc" style={{width:'100%',textAlign:'left',margin:'0px'}}>
                         Or <a href="">register now!</a>
                    </Form.Item>
                    
                </Form>
              
              </Col>
          </Row>
          </div>
    </div>
    );

}

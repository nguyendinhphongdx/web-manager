import { EyeInvisibleOutlined, EyeTwoTone, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Switch, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styleColumnModal, styleRowModal, styleRowModalAction, styleRowUploadAvatar } from "../../../Common/variable/var";
import {Add_Student_Service} from '../../../services/StudentService';
export function AddStudent(props){
    const {callback} = props;
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [file,setFile] = useState(()=>[]);
    const onChangeHandler = (e)=>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }
    const onReset = () => {
        form.resetFields();
      };
    function handleChangeOnAdd(data){
      data = {...data,file:file}
      Add_Student_Service(dispatch,data)
      .then(result => {
        callback();
      })
    }
    return(
        <Form onFinish={handleChangeOnAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name">
                <Input placeholder={'Enter student name'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
           <Col span={12} className="columns-element" style={styleColumnModal}>
               <Row>
               <Col span={24} className="columns-element" style={styleColumnModal}>
                        <Form.Item label="Password" name="password">
                        <Input.Password
                                placeholder="input password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                        </Form.Item>
               </Col>
               </Row>
               <Row >
                    <Col span={24} className="columns-element" style={styleColumnModal}>
                    <Form.Item label="Age" name="age">
                            <Input type="number" min="10" max="30" defaultValue={20}/>
                        </Form.Item>
                    </Col>
               </Row>
              
           </Col>
           <Col span={12} className="columns-element" style={styleRowUploadAvatar}>
                    <Form.Item label="Avatar" name="file"  onChange={onChangeHandler}>
                        <Upload >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
           </Col>
        </Row>
        <Row style={styleRowModal}>
               <Col span={12} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Phone" name="phone" >
                            <Input min="10" max="30" placeholder={'Enter phone number'}/>
                            </Form.Item>
               </Col>
               <Col span={12} className="columns-element" style={styleColumnModal}>
                            <Form.Item label="Status" name="status" >
                                <Switch checked={true}/>
                            </Form.Item>
               </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Email" name="email">
                <Input type="email" placeholder={'Enter gmail'} required={true}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Description" name="description">
                <TextArea placeholder="Introduction about student"/>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Reset</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Update Class</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}
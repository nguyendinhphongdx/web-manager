import { Button, Col, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../Common/variable/var";

export function GradeMark(props){
    const {record,_class,callback} = props;
    const [type,setType] = useState(()=>'default');
    const subjectUpdate = record.mark.find(subject => {
        return JSON.stringify(subject.subject._id)===JSON.stringify(_class.subject[0]._id)
    }
    )
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickUpdate=(data)=>{
        const body = {...data,_idSubject:_class.subject[0]._id,_idStudent:record._id}
        if(Object.keys(subjectUpdate).includes(body.type)){
            console.log('exist',body.mark);
            console.log(subjectUpdate[type].mark);
            if(body.mark==subjectUpdate[type].mark){
                console.log('Not needed update');
                callback();
                return
            }else{  
                console.log('needed update');
            }
        }else{
            console.log('needed update');
        }
        callback();
    }
    const [mark,setMark] = useState(()=>0);
    function handleChangeTypeMark(type){
        setType(type)
        
        if(subjectUpdate){
            const markByType=subjectUpdate[type]?subjectUpdate[type].mark:0;
            console.log(markByType);
            setMark(markByType);
        }
    }
    return(
        <Form onFinish={handleOnClickUpdate} form={form}>
             <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Class" name="class">
                <Input disabled={true} placeholder={_class.name}
                />
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Subject" name="subject">
                <Input disabled={true} placeholder={_class.subject[0].name}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Type" name="type" value={record.name}>
                <Select onChange={handleChangeTypeMark}>
                    <Select.Option key={'test'}>Test</Select.Option>
                    <Select.Option key={'middle'}>Middle</Select.Option>
                    <Select.Option key={'final'}>Final</Select.Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Mark" name="mark" >
                <Input  type="number" initialvalues={mark}/>
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
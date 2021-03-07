import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styleRowModal, styleRowModalAction,styleColumnModal } from "../../../Common/variable/var";
import { GetDataProfessor } from "../../../services/ProfessorService";
import { GetDataSubject } from "../../../services/SubjectService";
export function UpdateClass(props){
    const [form] = Form.useForm();
    const {record,callback} = props;
    const professorRedux = useSelector(state=>state.Professor.professores);
    const subjectRedux = useSelector(state=>state.Subject.subjects);
    const dispatch = useDispatch();
    useEffect(()=>{
        GetDataProfessor(dispatch)
        GetDataSubject(dispatch);
    },[])
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickAdd=(data)=>{
        const name = data.name?data.name:record.name;
        const _idSubject = data.idSubject;
        const _idFrofessor = data.idProfessor;
        const body = {_id:record._id,name,_idSubject,_idFrofessor}
        console.log(body);
        callback();
    }
    const elementSubject = subjectRedux.map(item => {
        return(
            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
        );
    })
    const elementProfessor = professorRedux.map(item => {
        return(
            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
        );
    })
    return(
        <Form onFinish={handleOnClickAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name" value={record.name}>
                <Input placeholder={record.name} defaultValue={record.name}
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="idSubject" label="Subject" >
                    <Select  defaultValue={record.subject[0]?record.subject[0]._id:''} >
                        {elementSubject}
                    </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Proff" name="idProfessor">
                <Select placeholder='Basic' defaultValue={record.professor[0]?record.professor[0]._id:''}>
                    {elementProfessor}
                </Select>
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
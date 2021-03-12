import { Button, Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../Common/variable/var";
import { validateClass } from "../../../helpers/validate";
import { AddDataClass } from "../../../services/ClassService";
export function FormAddClass(props){
    const [form] = Form.useForm();
    const {callback} = props;
    const state = useSelector(state=>state)
    const professorRedux = state.Professor.professores;
    const subjectRedux = state.Subject.subjects;
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickAdd=(data)=>{
        console.log(data);
        AddDataClass(dispatch,data)
        .then(result => {
            callback();
            console.log(result)
        })
        
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
    const arraySchedule = ['thứ 2','thứ 3','thứ 4','thứ 5','thứ 6','thứ 7','chủ nhật']
    const elementSchedule = arraySchedule.map((item,index)=>{
        return <Select.Option value={item} key={index}>{item}</Select.Option>
    })
    return(
        <Form onFinish={handleOnClickAdd} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name">
                <Input placeholder={'Enter Name'} 
                />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="_idSubject" label="Subject" >
                    <Select >
                        {elementSubject}
                    </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Proff" name="_idProfessor">
                <Select >
                    {elementProfessor}
                </Select>
            </Form.Item>
            </Col> 
        </Row>
        <Row style={styleRowModal}>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule1" label="Schedule 1" >
                <Select initialValues={'3'}>
                    {elementSchedule}
                </Select>
            </Form.Item>
            </Col>
            <Col span={12} className="columns-element" style={styleColumnModal}>
            <Form.Item name="schedule2" label="Schedule 2">
                    <Select initialValues={'3'}>
                        {elementSchedule}
                    </Select>
            </Form.Item>
            </Col> 
        </Row>
        <Row >
            <Col span={24} className="columns-element" style={styleColumnModal}>
                <Row className="row-btn" style={styleRowModalAction}>
                    <Button type="" className="btnFilter" onClick={onReset}>Reset</Button>
                    <Button type="primary" className="btnFilter"  htmlType="submit">Add Class</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}
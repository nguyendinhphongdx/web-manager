import { Button, Col, Form, Input, Row, Select } from "antd";
import { useDispatch } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../Common/variable/var";
import { validateClass } from "../../../helpers/validate";
import { UpdateDataClass } from "../../../services/ClassService";
export function UpdateClass(props){
    const [form] = Form.useForm();
    const {record,callback,state} = props;
    const professorRedux = state.Professor.professores;
    const subjectRedux = state.Subject.subjects;
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickUpdate=(data)=>{
        const dataValidate = validateClass(data);
        if(Object.keys(dataValidate).length!==0){
            var body = {_id:record._id,...dataValidate}
            UpdateDataClass(dispatch,body)
            .then(result =>{
                console.log(result);
                callback();
            })
        }
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
    const arraySchedule = ['thứ 2','thứ 3','thứ 4','thứ 5','thứ 6','thứ 7','chủ nhật']
    const elementSchedule = arraySchedule.map((item,index)=>{
        return <Select.Option value={item} key={index}>{item}</Select.Option>
    })
    return(
        <Form onFinish={handleOnClickUpdate} form={form}>
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
                    <Button type="primary" className="btnFilter"  htmlType="submit">Update Class</Button>
                </Row>
            </Col>
        </Row>
        </Form>
    );
}
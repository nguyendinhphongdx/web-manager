import { Button, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch } from "react-redux";
import { styleRowModal, styleRowModalAction,styleColumnModal } from "../../../Common/variable/var";
import { AddSubjectService } from "../../../services/SubjectService";

export function AddSubject(props){
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onReset = () => {
        form.resetFields();
      };
    const handleOnClickAdd=(data)=>{
        console.log(data);
        AddSubjectService(dispatch,data)
        .then((result) =>{
            if(result==='success'){
                props.callback(false);
            }
        })
    }
    return(
             <Form onFinish={handleOnClickAdd} form={form}>
            <Row style={styleRowModal}>
                <Col span={10} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Name" name="name">
                    <Input placeholder="Name"
                      required
                    />
                </Form.Item>
                </Col>
                <Col span={10} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Price" name="price">
                    <Input type="number" placeholder="price" required/>
                </Form.Item>
                </Col>  
                <Col span={4} className="columns-element" style={styleColumnModal}>
                <Form.Item name="unit" >
                        <Select placeholder='VND'defaultValue={"VND"} >
                        <Select.Option value='Dolar'>Dolar</Select.Option>
                        </Select>
                </Form.Item>
                </Col> 
            </Row>
            <Row style={styleRowModal}>
                <Col span={8} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Type" name="type">
                    <Select placeholder='Basic' defaultValue={"base"}>
                        <Select.Option value='advanced'>Advanced</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={9} className="columns-element" style={styleColumnModal}>
                <Form.Item label="Total Session" name="totalSession">
                    <Input type="number" required/>
                </Form.Item>
                </Col>
                <Col span={5} className="columns-element" style={styleColumnModal}>
                <Form.Item  name="status">
                <Select  placeholder='Active' defaultValue={"active"}>
                        <Select.Option value='blocked'>Block</Select.Option>
                    </Select>
                </Form.Item>
                </Col>   
            </Row>
            <Row >
                <Col span={24} className="columns-element" style={styleColumnModal}>
                <Form.Item  name="discription" label='Discription'>
                    <TextArea placeholder="Discription about subject..."/>
                </Form.Item>
                </Col>
            </Row>
            <Row >
                <Col span={24} className="columns-element" style={styleColumnModal}>
                    <Row className="row-btn" style={styleRowModalAction}>
                        <Button type="" className="btnFilter" onClick={onReset}>Reset</Button>
                        <Button type="primary" className="btnFilter"  htmlType="submit">Add Subject</Button>
                    </Row>
                </Col>
            </Row>
            </Form>
    );
}
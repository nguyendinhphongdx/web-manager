import { Button, Col, Form, Input, Row, Transfer } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../Common/variable/var";
import { devideStudentInClass} from "../../../helpers/uploadPreview";

export function AddMemberToClass(props){
    const [form] = Form.useForm();
    const {record,callback,state} = props;
    const studentRedux = useSelector(state=>state.Student.students);
    const listOfClass = devideStudentInClass(record.member,studentRedux);
    const listKeyNotInClass = listOfClass.NotInClass.map(item=>item.key);
    const [initialTargetKeys,setInitialTargetKeys] = useState(()=>listKeyNotInClass);
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
      };
    
      const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      };
    
    const onReset = () => {
        form.resetFields();
        setInitialTargetKeys(listKeyNotInClass);
      };
    return(
        <Form onFinish={(data)=>console.log(data)} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name" value={record.name}>
                <Input placeholder="" defaultValue={record.name}/>
            </Form.Item>
            <Form.Item  name="member">
                    <Transfer
                    dataSource={listOfClass.NotInClass}
                    showSearch
                    listStyle={{
                        width: 400,
                        height: 300,
                        }}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onChange}
                    onSelectChange={onSelectChange}
                    render={item => item.name}
                    />
            </Form.Item>
            </Col>
        </Row>
        <Row style={styleRowModal}>
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
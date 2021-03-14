import { Button, Col, Form, Input, Row, Transfer } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styleColumnModal, styleRowModal, styleRowModalAction } from "../../../Common/variable/var";
import { devideStudentInClass, filterStudentByKeys} from "../../../helpers/uploadPreview";
import { AddStudentsToClass } from "../../../services/ClassService";

export function AddMemberToClass(props){
    const [form] = Form.useForm();
    const {record,callback} = props;
    const dispatch = useDispatch();
    const studentRedux = useSelector(state=>state.Student.students);
    const listOfClass = devideStudentInClass(record.member,studentRedux);
    const listKeyNotInClass = listOfClass.NotInClass.map(item=>item.key);
    const [initialTargetKeys,setInitialTargetKeys] = useState(()=>listKeyNotInClass);
    const listKeyInClass = listOfClass.inClass.map(item=>item?item.key:-1);
    const [targetKeys, setTargetKeys] = useState(()=>listKeyInClass);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
      };
      const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      };
    
    const onReset = () => {
        form.resetFields();
        setInitialTargetKeys(listKeyNotInClass);
        setTargetKeys(listKeyInClass)
      };
    const handleOnSubmit = (data) => {
        
        if(data.member){
            const body = {
                _idStudents:filterStudentByKeys(data.member,studentRedux),
                _id:record._id
            };
            console.log(body);
            AddStudentsToClass(dispatch,body)
            .then(result => {console.log(result)})
           
        }else{
            console.log('Not Changed');
        }
    }
    return(
        <Form onFinish={handleOnSubmit} form={form}>
        <Row style={styleRowModal}>
            <Col span={24} className="columns-element" style={styleColumnModal}>
            <Form.Item label="Name" name="name" value={record.name}>
                <Input placeholder="" initialvalues={record.name} disabled={true}/>
            </Form.Item>
            <Form.Item  name="member">
                    <Transfer
                    dataSource={studentRedux}
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
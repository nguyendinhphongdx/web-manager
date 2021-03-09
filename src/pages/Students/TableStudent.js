import {Button, Modal, Row, Table} from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from '../../contructData/student';
import { GetDataStudent } from '../../services/StudentService';
import './Student.scss';
export default function TabelStudent(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const studentRedux = useSelector(state=>state.Student.students);
    const dispatch = useDispatch();
    useEffect(()=>{
        GetDataStudent(dispatch)
        .then(result => console.log(result))
    },[])
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <div className="tabelPanel">
            <Row className="add-student">
                <Button type="primary" onClick={showModal}>Add Student</Button>
            </Row>
            <Modal title="Add Student" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={studentRedux} columns={columns} bordered ></Table>
        </div>
        
    );
}
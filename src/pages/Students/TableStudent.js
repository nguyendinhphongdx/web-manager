import {Button, Modal, Row, Table} from 'antd';
import { useState } from 'react';
import { columns, dataSource } from '../../contructData/student';
import './Student.scss';
export default function TabelStudent(){
    const [isModalVisible, setIsModalVisible] = useState(false);

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
            <Table dataSource={dataSource} columns={columns} bordered></Table>
        </div>
        
    );
}
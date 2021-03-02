import { Button, Modal, Row, Table } from "antd";
import { useState } from 'react';
import { columns, dataSource } from '../../contructData/schemal';
import './Schemal.scss';
export default function TableSchemal(){
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
                <Button type="primary" onClick={showModal}>Add Schemal</Button>
            </Row>
            <Modal title="Add Schemal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={dataSource} columns={columns}></Table>
        </div>
        
    );
}
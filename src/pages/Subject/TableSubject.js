import { Button, Modal, Row, Table } from "antd";
import { useState } from "react";
import { columns, dataSource } from "../../contructData/Subject";
import './Subject.scss';
export default function TableSubject(){
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
            <Row className="add-subject">
                <Button type="primary" onClick={showModal}>Add Subject</Button>
            </Row>
            <Modal title="Add Subject" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={dataSource} bordered columns={columns}></Table>
        </div>
        
    );
}
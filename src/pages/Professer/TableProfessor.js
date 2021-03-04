import { Button, Modal, Row, Table } from "antd";
import { useState } from "react";
import { columns, dataSource } from "../../contructData/Froferssor";

export default function TableFrofessor(){
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
            <Row className="add-frofessor">
                <Button type="primary" onClick={showModal}>Add Frofessor</Button>
            </Row>
            <Modal title="Add Frofessor" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={dataSource} columns={columns}  bordered></Table>
        </div>
        
    );
}
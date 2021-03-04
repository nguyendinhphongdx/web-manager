import { Button, Modal, Row, Table } from "antd";
import { useState } from "react";
import ListCardUpload from "../../components/ListCard/ListCardUpload";

export default function TableUpload(){
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
            <Row className="add-file">
                <Button type="primary" onClick={showModal}>Add File</Button>
            </Row>
            <Modal title="Add Document" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <ListCardUpload/>
        </div>
    );
}
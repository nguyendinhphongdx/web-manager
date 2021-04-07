import { Button, Modal, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "../../contructData/Froferssor";
import { GetDataProfessor } from "../../services/ProfessorService";

export default function TableFrofessor(){
    const listProfessor = useSelector(state=>state.Professor.professores)
    const dispatch = useDispatch();
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
    useEffect(()=>{
        GetDataProfessor(dispatch)
        .then(result => console.log(result))
    },[])
    console.log(listProfessor);
    return(
        <div className="tabelPanel">
            <Row className="add-frofessor">
                <Button type="primary" onClick={showModal}>Add Frofessor</Button>
            </Row>
            <Modal title="Add Frofessor" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={listProfessor} columns={columns}  bordered></Table>
        </div>
        
    );
}
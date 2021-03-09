import { Button, Modal, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "../../contructData/Class";
import { convertClass } from "../../helpers/convert";
import { GetDataClass } from "../../services/ClassService";

export default function TableClass(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const listClass = useSelector(state=>state.Class.classes);
    const listProfessor = useSelector(state=>state.Professor.professores);
    const classConverted = convertClass(listClass,listProfessor);
    const dispatch = useDispatch();
    useEffect(()=>{
        GetDataClass(dispatch)
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
            <Row className="add-class">
                <Button type="primary" onClick={showModal}>Add Class</Button>
            </Row>
            <Modal title="Add Class" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               
            </Modal>
            <Table dataSource={classConverted} columns={columns}  bordered></Table>
        </div>
        
    );
}
import { Button, Modal, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddSubject } from "../../components/FormModal/subject/addSubject";
import { columns } from "../../contructData/Subject";
import { GetDataSubject } from "../../services/SubjectService";
import './Subject.scss';
export default function TableSubject(){
    const listSubject = useSelector(state=>state.Subject.subjects)
    const dispatch = useDispatch()
    useEffect(()=>{
        GetDataSubject(dispatch);
    },[])
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
            <Modal title="Add Subject" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={null} width={600}
            >
               <AddSubject callback={setIsModalVisible}/>
            </Modal>
            <Table dataSource={listSubject} bordered columns={columns}></Table>
        </div>
        
    );
}
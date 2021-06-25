import { Row } from "antd";
import { getProfessorById } from "../../helpers/uploadPreview";

export default function ContentNavCard(props){
    const {item,listProfessor} = props;
    const professor = getProfessorById(item.professor[0],listProfessor);
    const nameSubject = item.subject[0]?item.subject[0].name:'defaulName Subject';
    return(
        <div className="contentCard">
            <Row>
                Giảng viên : {professor.name }
            </Row>
            <Row>
                SL học sinh : {item.member.length}
            </Row>
            <Row>
                Môn học : {nameSubject}
            </Row>
        </div>
    );
}
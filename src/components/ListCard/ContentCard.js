import { Row } from "antd";

export default function ContentNavCard(props){
    const {item} = props;
    return(
        <div className="contentCard">
            <Row>
                Professor : {item.professor[0] || 'defaultProfessor'}
            </Row>
            <Row>
                Total : {item.member.length}
            </Row>
            <Row>
                Subject : {item.subject[0] || 'defaultSubject'}
            </Row>
        </div>
    );
}
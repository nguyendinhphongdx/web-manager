import { Col, Row } from "antd";
import ChartClassMark from "../../components/Chart/ChartClassMark";
import TopLevel from "../../components/TopClass/TopClass";

export default function TableHome(){
    return(
        <div className="tableHome">
            <Row>
                <Col span={16}>
                    <ChartClassMark/>
                  
                </Col>
                <Col span={8}>
                    <TopLevel/>
                </Col>
            </Row>
        </div>
    );
}
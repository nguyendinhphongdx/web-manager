import { Card, Carousel, Col, Row } from "antd";
import ContentNavCard from "./ContentCard";
import './NavCard.scss';
export default function NavCard(){
    const contentStyle = {
        height: '180px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <Carousel autoplay >
            <div >
                <div style={contentStyle}>
                <Row gutter={16} className="row-carousel">
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
            <div>
            <div style={contentStyle}>
                <Row gutter={16} className="row-carousel">
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    </Row>
                </div>   
            </div>
            <div>
            <div style={contentStyle}>
                <Row gutter={16} className="row-carousel">
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
            <div>
            <div style={contentStyle}>
                <Row gutter={16} className="row-carousel">
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                            <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Card title" bordered={true} className="card-title">
                        <ContentNavCard/>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        </Carousel> 
        
    );
}
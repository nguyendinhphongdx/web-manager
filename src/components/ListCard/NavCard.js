import { Card, Carousel, Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentStyle } from "../../Common/variable/var";
import { devideCard } from "../../helpers/uploadPreview";
import { GetDataClass } from "../../services/ClassService";
import ContentNavCard from "./ContentCard";
import './NavCard.scss';
export default function NavCard(){
    const dispatch = useDispatch()
    const listClass = useSelector(state=>state.Class.classes)
    const listProfessor = useSelector(state=>state.Professor.professores)
    useEffect(()=>{
        GetDataClass(dispatch)
        .then(result =>console.log(result))
    },[])
   
    const listdevided = devideCard(listClass);
    const elementCarousel = listdevided.map((group,index)=>{
        const elementItem = group.map((item,index)=>{
          
            return(
                <Col span={6} key={item._id}>
                        <Card title={item.name} bordered={true} className="card-title">
                            <ContentNavCard item={item} listProfessor={listProfessor}/>
                            
                        </Card>
                </Col>
            );
        })
        return(
            <div >
                <div style={contentStyle}>
                <Row gutter={16} className="row-carousel">
                    {elementItem}
                </Row>
                </div>
            </div>
        )
    })
    console.log(elementCarousel);
    return(
        <Carousel autoplay >
            {elementCarousel}
        </Carousel> 
        
    );
}
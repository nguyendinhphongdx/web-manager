import { Card } from "antd";
import pdf from '../../images/pdf.png';
import doc from '../../images/doc.png';
import zip from '../../images/zip.png';
import image from '../../images/default.png';
import jpg from '../../images/jpg.png';
import js from '../../images/js.png';
import xlsx from '../../images/xlsx.png';
import {NODE_SERVER} from '../../axios/configAPI' 
export default function CardUpload(props){
    const {record} = props;
    const onError = (err) => {
        console.log(err);
    }
    let type = image;
    switch(record.type){
        case 'doc': type=doc;break;
        case 'pdf': type=pdf;break;
        case 'zip': type=zip;break;
        case 'jpg': type=jpg;break;
        case 'js': type=js;break;
        case 'xlsx': type=xlsx;break;
        default: type=image;
    }   
    const path = `${NODE_SERVER}/${record.path}`;
    console.log(path);
    return(
        <Card title={record.title}>
                <a href={path} target="_blank" rel="noreferrer">
                <img width="100%" src={type} alt={record.title}/>
                </a>
                 <h3>{record.subject?record.subject[0].name:'nameUndefind'}</h3>
        </Card>
    );
}
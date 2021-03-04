import { Card, Image } from "antd";
import { Button } from "antd/lib/radio";
import FilePreviewer from 'react-file-previewer';
import FileViewer from 'react-file-viewer';
import pdf from '../../images/default.png';
export default function CardUpload(props){
    const {record} = props;
    const onError = (err) => {
        console.log(err);
    }
    const url ='https://cors-anywhere.herokuapp.com/http://africau.edu/images/default/sample.pdf'
    return(
        <Card title={record.title}>
                 <img width="100%" src={pdf}/>
                 <h3>{record.title}</h3>
        </Card>
    );
}
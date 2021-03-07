import { Image } from "antd";
import defaultAvatar from '../../images/default.png';
import * as URL from '../../axios/configAPI';
export default function ImageComponent(props) {
    var src='';
    var folder=null;
    switch(props.type){
        case 'professor': folder='frofessor';break;
        case 'student': folder='students';break
        default: return null; 
    }
    if(folder){
        src = props.url!==''?`${URL.NODE_SERVER}/uploads/${folder}/${props.url}`:defaultAvatar;
    }else{
        src = defaultAvatar;
    }
    console.log(src);
    return(
        <div className="">
            <Image width={100} src={src}/>
        </div>
    );
}
import { Image } from "antd";

export default function ImageComponent(props) {
    return(
        <div className="">
            <Image width={120} src={props.url}/>
        </div>
    );
}
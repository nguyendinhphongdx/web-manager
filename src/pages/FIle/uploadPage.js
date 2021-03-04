import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TableUpload from "./TableUpload";

export default function UploadPage(){
    return(
        <div className="uploadPage">
                <CollapseFilter type='file'/>
                <TableUpload/>
        </div>
                
    );
}
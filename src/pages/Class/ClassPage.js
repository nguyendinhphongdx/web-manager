import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TableClass from "./TableClass";

export default function ClassPage(){
  
    return(
        <div className="classPage">
            <CollapseFilter type="class"/>
            <TableClass/>
        </div>
        
    );
}
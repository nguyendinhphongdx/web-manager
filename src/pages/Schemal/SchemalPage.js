import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TableSchemal from "./TableSchemal";

export default function SchemalPage(){
    return(
        <div className="">
            <CollapseFilter type="schemal"></CollapseFilter>
            <TableSchemal></TableSchemal>
        </div>
        
    );
}
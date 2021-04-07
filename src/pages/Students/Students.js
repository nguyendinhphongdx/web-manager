import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TabelStudent from "./TableStudent";

export default function StudentPage(){
    return (
        <div className="studentPage">
                <CollapseFilter type='students'></CollapseFilter>
                <TabelStudent></TabelStudent>
        </div>
        
    );
}
import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TabelStudent from "../Students/TableStudent";


export default function ProfessorPage(){
    return (
        <div className="studentPage">
                <CollapseFilter type='students'></CollapseFilter>
                <TabelStudent></TabelStudent>
        </div>
        
    );
}
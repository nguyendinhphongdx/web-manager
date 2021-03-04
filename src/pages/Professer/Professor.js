import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TableFrofessor from './TableProfessor';


export default function ProfessorPage(){
    return (
        <div className="studentPage">
                <CollapseFilter type='professor'></CollapseFilter>
                <TableFrofessor/>
        </div>
        
    );
}
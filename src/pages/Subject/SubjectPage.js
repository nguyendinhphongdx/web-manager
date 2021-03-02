import CollapseFilter from "../../components/collapseFilter/CollapseFillter";
import TableSubject from "./TableSubject";

export default function SubjectPage(){
    return (
        <div className="subjectPage">
                <CollapseFilter type='subject'></CollapseFilter>
                <TableSubject></TableSubject>
        </div>
        
    );
}
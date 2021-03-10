import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavCard from "../../components/ListCard/NavCard";
import { GetDataProfessor } from "../../services/ProfessorService";
import { GetDataSubject } from "../../services/SubjectService";
import TableHome from "./TableHome";

export default function HomePage(){
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state);
    useEffect(()=>{
        GetDataProfessor(dispatch)
        GetDataSubject(dispatch);
    },[])
    return(
        <div className="homePage">
               <NavCard pros/>
               <TableHome/>
        </div>
       
    );
}
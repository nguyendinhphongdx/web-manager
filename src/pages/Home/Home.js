import { useSelector } from "react-redux";
import NavCard from "../../components/ListCard/NavCard";
import TableHome from "./TableHome";

export default function HomePage(){
    const state = useSelector(state=>state)
    console.log(state);
    return(
        <div className="homePage">
               <NavCard/>
               <TableHome/>
        </div>
       
    );
}
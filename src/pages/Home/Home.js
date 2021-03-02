import NavCard from "../../components/ListCard/NavCard";
import TableHome from "./TableHome";

export default function HomePage(){
    return(
        <div className="homePage">
               <NavCard/>
               <TableHome/>
        </div>
       
    );
}
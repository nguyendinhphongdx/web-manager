import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {TeamOutlined}  from '@ant-design/icons';
import { filterStudentInClass, getProfessorById } from "../../helpers/uploadPreview";
import { useSelector } from "react-redux";

export function DrawerClass(props){
    const {students,state,professor} = props;
    const studentRedux = useSelector(state=>state.Student.students);
    const studentInClass = filterStudentInClass(students,studentRedux);
    const professorRedux = useSelector(state=>state.Professor.professores);
    const professorInClass = getProfessorById(professor.length!==0?professor[0]:0,professorRedux);
    const element = studentInClass.map((student,index) =>{
        return(
            <Menu.Item key={student?student._id:'id errror'}>{student?student.name:'name error'}</Menu.Item>
        );
    })
    const ElementProfessor =() =>{
        return(
            <Menu.Item key={professorInClass._id}>{professorInClass.name}</Menu.Item>
        );
    }
    return(
        <Menu theme="dark"  defaultOpenKeys={["students"]}  mode="inline">
        <SubMenu key="students" icon={<TeamOutlined /> } title=" Member">
            {element}
        </SubMenu>
        <SubMenu key="professor" icon={<TeamOutlined /> } title=" Professor">
            <ElementProfessor/>
        </SubMenu>
      </Menu>
    );
}
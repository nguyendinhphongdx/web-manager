import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {TeamOutlined}  from '@ant-design/icons';
import { filterStudentInClass } from "../../helpers/uploadPreview";
import { useSelector } from "react-redux";

export function DrawerClass(props){
    const {students,state} = props;
    const studentRedux = useSelector(state=>state.Student.students);
    const studentInClass = filterStudentInClass(students,studentRedux);
    const element = studentInClass.map((student,index) =>{
        return(
            <Menu.Item key={student._id}>{student.name}</Menu.Item>
        );
    })
    const elementProfessor = studentInClass.map((student,index) =>{
        return(
            <Menu.Item key={index}>{student.name}</Menu.Item>
        );
    })
    return(
        <Menu theme="dark"  defaultOpenKeys={["students"]}  mode="inline">
        <SubMenu key="students" icon={<TeamOutlined /> } title=" Member">
            {element}
        </SubMenu>
        <SubMenu key="professor" icon={<TeamOutlined /> } title=" Professor">
            {elementProfessor}
        </SubMenu>
      </Menu>
    );
}
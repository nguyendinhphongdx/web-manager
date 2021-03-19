import { TeamOutlined } from '@ant-design/icons';
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useSelector } from "react-redux";
import { convertScheduleClass } from '../../helpers/convert';
import { filterStudentInClass } from "../../helpers/uploadPreview";

export function DrawerClass(props){
    const {students,record,professor} = props;
    const studentRedux = useSelector(state=>state.Student.students);
    const studentInClass = filterStudentInClass(students,studentRedux);
    const element = studentInClass.map((student,index) =>{
        return(
            <Menu.Item key={student?student._id:'id errror'}>{student?student.name:'name error'}</Menu.Item>
        );
    })
    const {schedule1,schedule2} = record;
    const menuSchedule1 = convertScheduleClass(schedule1);
    const menuSchedule2 = convertScheduleClass(schedule2);
    return(
        <Menu theme="dark"  defaultOpenKeys={["students"]}  mode="inline">
        <SubMenu key="students" icon={<TeamOutlined /> } title=" Member">
            {element}
        </SubMenu>
        <SubMenu key="professor" icon={<TeamOutlined /> } title=" Professor">
            <Menu.Item key={0}>{professor}</Menu.Item>
        </SubMenu>
        <SubMenu key="Schedule" icon={<TeamOutlined /> } title=" Schedule">
            <Menu.Item key={1}>{menuSchedule1}</Menu.Item>
            <Menu.Item key={2}>{menuSchedule2}</Menu.Item>
        </SubMenu>
      </Menu>
    );
}
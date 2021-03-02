import ClassPage from "./pages/Class/ClassPage";
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFount from "./pages/NotFount/NotFount";
import ProfessorPage from "./pages/Professer/Professor";
import ProfilePage from "./pages/Profile/ProfilePage";
import SchemalPage from "./pages/Schemal/SchemalPage";
import StudentPage from "./pages/Students/Students";
import SubjectPage from "./pages/Subject/SubjectPage";

const Routes = [
    {
        path: '/',
        exact: true,
        main: Login,
    },
    {
        path: '/home',
        exact: true,
        main: HomePage,
    },
    {
        path: '/students',
        exact: true,
        main: StudentPage,
    },
    {
        path: '/schemal',
        exact: true,
        main: SchemalPage,
    },
    {
        path: '/professor',
        exact: true,
        main: ProfessorPage,
    },
    {
        path: '/subject',
        exact: true,
        main: SubjectPage,
    },
    {
        path: '/class',
        exact: true,
        main: ClassPage,
    },
    {
        path: '/profile',
        exact: true,
        main: ProfilePage,
    },
    // {
    //     path: '*',
    //     exact: false,
    //     main: NotFount
    // }
];
export default Routes;
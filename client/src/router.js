//ROUTE
import {
    ADMIN_ROUTE,
    CHILDREN_ROUTE,
    DIRECTOR_ROUTE,
    HOME_AUTH_ROUTE,
    HOME_ROUTE,
    INSTRUCTION_ROUTE,
    LOGIN_ROUTE,
    PROGRAMS_ROUTE,
    SETTING_AUTH_ROUTE,
    TEACHER_ROUTE
} from "./utils/consts";

//components
import Programs from './components/Home/Description/BlocksDescriprion/Programs';
import ProgramPage from "./pages/ProgramPage";
import Home from "./pages/Home";
import Instruction from "./components/Home/Description/BlocksDescriprion/Instruction";
import Authorization from "./components/Home/Description/BlocksDescriprion/Authorization";
import Auth from "./pages/Auth";
import AuthHome from "./pages/AuthHome";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: ProgramPage
    },
    {
        path: TEACHER_ROUTE,
        Component: ProgramPage
    },
    {
        path: DIRECTOR_ROUTE,
        Component: ProgramPage
    },
    {
        path: CHILDREN_ROUTE,
        Component: ProgramPage
    },
    {
        path: PROGRAMS_ROUTE + '/:id',
        Component: ProgramPage
    },
    {
        path: HOME_AUTH_ROUTE,
        Component: AuthHome
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: INSTRUCTION_ROUTE,
        Component: Instruction
    },
    {
        path: PROGRAMS_ROUTE,
        Component: Programs
    },
    {
        path: SETTING_AUTH_ROUTE,
        Component: Authorization
    },
]
//ROUTE
import {
    ADMIN_ROUTE,
    CHILDREN_ROUTE,
    DIRECTOR_ROUTE,
    HOME_ROUTE,
    INSTRUCTION_ROUTE,
    LOGIN_ROUTE,
    PROGRAMS_ROUTE,
    SETTING_AUTH_ROUTE,
    TEACHER_ROUTE
} from "./utils/consts";

//COMPONENTS
import Programs from './components/Home/Description/BlocksDescriprion/Programs';
import ProgramPage from "./pages/ProgramPage";
import Home from "./pages/Home";
import Instruction from "./components/Home/Description/BlocksDescriprion/Instruction";
import Authorization from "./components/Home/Description/BlocksDescriprion/Authorization";

export const authRoutes = [
    {
        path: ADMIN_ROUTE
    },
    {
        path: TEACHER_ROUTE
    },
    {
        path: DIRECTOR_ROUTE
    },
    {
        path: CHILDREN_ROUTE
    },
    {
        path: PROGRAMS_ROUTE + '/:id',
        Component: ProgramPage
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
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
        path: PROGRAMS_ROUTE + '/:id',
        Component: ProgramPage
    },
    {
        path: SETTING_AUTH_ROUTE,
        Component: Authorization
    },
]
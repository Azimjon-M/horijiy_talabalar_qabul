// USER
import Main from "../views/Main";
import ArizaYuborish from "../views/ArizaYuborish"
// import Login from '../views/Login';
import AdminPanel from '../views/AdminPanel'

const routes = [
    {
        id: 1,
        title_id: "navHome",
        path: "/",
        element: Main,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 2,
        title_id: "navArizaYuborish",
        path: "/ariza-yuborish",
        isPrivate: false,
        hidden: false,
        element: ArizaYuborish,
        role: "user",
        isBtn: true,
    },
    {
        id: 4,
        title_id: "Admin panel",
        path: 'admin-panel',
        isPrivate: true,
        hidden: true,
        element: AdminPanel,
        role: 'admin'
    },
    // {
    //     id: ,
    //     title_id: "",
    //     path: '',
    //     isPrivate: ,
    //     element: ,
    //     role: ''
    // },
];

export default routes;

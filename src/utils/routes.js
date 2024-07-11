// USER
import Main from "../views/Main";
import ArizaYuborish from "../views/ArizaYuborish"
import AdminPanel from '../views/AdminPanel'
import Author from "../views/Author";

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
    {
        id: 5,
        title_id: "Author",
        path: 'authors',
        isPrivate: false,
        hidden: false,
        element: Author,
        role: 'user'
    },
];

export default routes;

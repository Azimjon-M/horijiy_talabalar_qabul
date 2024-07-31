// USER
import Main from "../views/Main";
import ArizaYuborish from "../views/ArizaYuborish";
import AdminPanel from "../views/AdminPanel";
import Author from "../views/Author";
import Qabul from "../views/Qabul";
import Bakalavr from "../views/Bakalavr";
import Magistr from "../views/Magistr";
import PhD from "../views/PhD";
import DsC from "../views/DsC";

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
        title_id: "navQabul",
        path: "/qabul",
        isPrivate: false,
        hidden: false,
        element: Qabul,
        role: "user",
    },
    // qabul child
    {
        id: 3,
        path: "/qabul/bakalavr",
        isPrivate: false,
        hidden: true,
        element: Bakalavr,
        role: "user",
    },
    {
        id: 4,
        path: "/qabul/magistr",
        isPrivate: false,
        hidden: true,
        element: Magistr,
        role: "user",
    },
    {
        id: 5,
        path: "/qabul/phd",
        isPrivate: false,
        hidden: true,
        element: PhD,
        role: "user",
    },
    {
        id: 6,
        path: "/qabul/dsc",
        isPrivate: false,
        hidden: true,
        element: DsC,
        role: "user",
    },
    // /qabul child
    {
        id: 7,
        title_id: "navArizaYuborish",
        path: "/ariza-yuborish",
        isPrivate: false,
        hidden: false,
        element: ArizaYuborish,
        role: "user",
        isBtn: true,
    },
    {
        id: 8,
        title_id: "Author",
        path: "/authors",
        isPrivate: false,
        hidden: false,
        element: Author,
        role: "user",
    },
    {
        id: 9,
        path: "/admin-panel",
        isPrivate: true,
        hidden: true,
        element: AdminPanel,
        role: "admin",
    },

];

export default routes;

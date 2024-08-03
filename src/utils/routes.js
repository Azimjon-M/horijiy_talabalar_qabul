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
import AdminBakalavr from "../views/AdminBakalavr";
import AdminMagistr from "../views/AdminMagistr";
import AdminPhd from "../views/AdminPhd";
import AdminDsc from "../views/AdminDsc";

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
    {
        id: 7,
        path: "/admin-panel/qabul/bakalavr",
        isPrivate: true,
        hidden: true,
        element: AdminBakalavr,
        role: "user",
    },
    {
        id: 8,
        path: "/admin-panel/qabul/magistr",
        isPrivate: true,
        hidden: true,
        element: AdminMagistr,
        role: "user",
    },
    {
        id: 9,
        path: "/admin-panel/qabul/phd",
        isPrivate: true,
        hidden: true,
        element: AdminPhd,
        role: "user",
    },
    {
        id: 10,
        path: "/admin-panel/qabul/dsc",
        isPrivate: true,
        hidden: true,
        element: AdminDsc,
        role: "user",
    },
    // /qabul child
    {
        id: 11,
        title_id: "navArizaYuborish",
        path: "/ariza-yuborish",
        isPrivate: false,
        hidden: false,
        element: ArizaYuborish,
        role: "user",
        isBtn: true,
    },
    {
        id: 12,
        title_id: "Author",
        path: "/authors",
        isPrivate: false,
        hidden: false,
        element: Author,
        role: "user",
    },
    {
        id: 13,
        path: "/admin-panel/arizalar",
        isPrivate: true,
        hidden: true,
        element: AdminPanel,
        role: "admin",
    },

];

export default routes;

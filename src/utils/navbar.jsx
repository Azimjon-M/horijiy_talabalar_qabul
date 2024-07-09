//Icons
import { ReactComponent as Analitika } from "../assets/icons/analytics.svg";

// LOGIN
import Login from "../components/Login";

// HOME
import AsosiyVideo from "../pages/Home/AsosiyVideo";

const sidebar = [
    {
        id: 4,
        title: "Home",
        path: "/home",
        icon: Analitika,
        isPrivate: true,
        element: AsosiyVideo,
        role: ["admin"],
        children: [
            {
                id: `4-1`,
                title: "Asosiy video",
                path: "/home/asosiy-video",
                isPrivate: true,
                element: AsosiyVideo,
                role: ["admin"],
            },
        ],
    },
    {
        id: 10,
        title: "Bo'sh ish o'rinlari",
        path: "/vakansiyalar",
        icon: Analitika,
        isPrivate: true,
        element: AsosiyVideo,
        role: ["admin"],
    },
    {
        id: 11,
        title: "Log In",
        path: "/login",
        isPrivate: true,
        element: Login,
        hidden: true,
        role: ["admin"],
    },
    {
        id: 12,
        title: "Reset",
        path: "/reset",
        isPrivate: true,
        element: AsosiyVideo,
        hidden: true,
    },
];

export default sidebar;

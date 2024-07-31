import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import "./style.css";

const Saidbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    const hanleClickLogo = () => {
        setMenu(!menu);
    };
    const onLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("dates");
        navigate("/login");
    };

    return (
        <div className="flex justify-start items-start">
            <div
                className={`${
                    menu ? "w-[50px]" : "w-[300px]"
                } bg-gray-200 h-[100vh] costom-animation`}
            />
            <div
                className={`${
                    menu ? "w-[50px]" : "w-[250px]"
                } fixed top-0 left-0 bg-gray-200 h-[100vh] costom-animation z-20`}
            >
                <div>
                    <div className={`${menu ? "p-[10px]" : "p-4"} text-center`}>
                        <FiMenu
                            className="text-[24px]"
                            onClick={hanleClickLogo}
                        />
                    </div>
                    <ul className={`${menu && "hidden"} p-4`}>
                        <li className="my-2">
                            <Link
                                className={` text-[18px] font-medium underline-offset-2`}
                                to={`admin-panel`}
                            >
                                Arizalar
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={onLogout}
                    className={`${
                        menu && "hidden"
                    } w-[120px] absolute bottom-2 left-[50%] translate-x-[-50%] flex btn items-center gap-2`}
                >
                    <FiLogOut className="rotate-[180deg]" /> Chiqish
                </button>
            </div>
            <div className="w-full">
                <div className="w-full h-[30px] bg-gray-500 sticky top-0 right-0 -z-0" />
                <div className="-z-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Saidbar;

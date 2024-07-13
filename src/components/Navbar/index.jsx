import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import routes from "../../utils/routes";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/icons/logo_kspi.png";
import TextTranslate from "../TextTranslate";
import { TogglerLang } from "../../context/language";
import uzIcon from "../../assets/icons/flag-uz.png";
import ruIcon from "../../assets/icons/flag-ru.png";
import enIcon from "../../assets/icons/flag-en.png";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
    const { isLang, setIsLang } = useContext(TogglerLang);
    const [togglerMenu, setTogglerMenu] = useState(false);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setTogglerMenu(false);
        }
    };

    useEffect(() => {
        // Mousedown va touchstart hodisalarini tinglash
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            // Qo'shilgan hodisalarni tozalash
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const data = { uz: uzIcon, ru: ruIcon, en: enIcon };
    // const onChange = (e) => {
    //     setIsLang(e.target.value);
    // }

    const handliTogleLang = (numb) => {
        setTogglerMenu(!togglerMenu);
        switch (numb) {
            case "1":
                setIsLang("uz");
                break;
            case "2":
                setIsLang("ru");
                break;
            case "3":
                setIsLang("en");
                break;
            default:
                setIsLang("uz");
                break;
        }
    };

    const ChangeText = (item) => {
        return String(item).toUpperCase();
    };

    return (
        <div className="z-20">
            <div className="w-full h-[80px] lg:h-[90px] flex items-center justify-between sticky top-0 left-0 z-30">
                <ul className="md:w-full h-full flex items-center bg-cyan-50 ps-4 md:ps-6 lg:ps-12">
                    <li>
                        <NavLink to={`/`} className="flex items-center gap-3">
                            <img
                                className="w-[40px] h-auto"
                                src={logoIcon}
                                alt="Logo"
                            />
                            <div className="hidden sm:inline-block w-[200px] leading-5 font-medium">
                                <TextTranslate id="navLogoContent" />
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <ul className="w-full h-full flex justify-end items-center gap-4 lg:gap-10 lg:text-[18px] font-medium px-4 md:px-10 py-6 bg-cyan-50">
                    <li ref={dropdownRef} className="relative font-medium">
                        <div>
                            <button
                                onClick={() => setTogglerMenu((prev) => !prev)}
                                className="btn btn-sm btn-ghost px-4 flex flex-nowrap"
                            >
                                <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                    <img
                                        className="w-full h-full"
                                        src={data[isLang]}
                                        alt="icon"
                                    />
                                </div>
                                {ChangeText(isLang)}
                                <FaAngleRight
                                    className={`${
                                        togglerMenu
                                            ? "rotate-[270deg]"
                                            : "rotate-[90deg]"
                                    }  text-[1rem] style-slide-nav`}
                                />
                            </button>
                        </div>
                        <div
                            className={`${
                                togglerMenu ? "" : "hidden"
                            } z-10 font-medium absolute bottom-[-130px] left-[50%] translate-x-[-50%] bg-gray-50 rounded-lg p-2`}
                        >
                            <button
                                onClick={() => handliTogleLang("1")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={uzIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    UZ
                                </li>
                            </button>
                            <button
                                onClick={() => handliTogleLang("2")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={ruIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    RU
                                </li>
                            </button>
                            <button
                                onClick={() => handliTogleLang("3")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={enIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    EN
                                </li>
                            </button>
                        </div>
                    </li>
                    {routes.map((route) => {
                        return (
                            !route.hidden && (
                                <li key={route.id}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `${
                                                route.isBtn
                                                    ? "btn btn-success btn-sm lg:btn-md lg:text-[18px] text-white"
                                                    : isActive &&
                                                      "underline decoration-2 underline-offset-2"
                                            }`
                                        }
                                        to={route.path}
                                    >
                                        <TextTranslate id={route.title_id} />
                                    </NavLink>
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;

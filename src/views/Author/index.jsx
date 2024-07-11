import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { FaTelegramPlane } from "react-icons/fa";
import TextTranslate from "../../components/TextTranslate";

const Author = () => {
    return (
        <div className="p-10">
            <div className="shadow-xl py-6">
                <div className="mt-4">
                    <div className="flex justify-center items-center">
                        <h1 className="font-semibold text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                            <TextTranslate id="authorTitle" />
                        </h1>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-center items-center">
                        <h1 className="flex font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                            <TextTranslate id="authorSubTitle_1" />:
                        </h1>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] gap-2 md:gap-3 xl:gap-8 2xl:gap-12 p-2 md:p-4 lg:py-10">
                    <div className="bg-gray-200 rounded-md p-4">
                        <div className="text-center">
                            <h1 className="font-semibold">Meliboev Azimjon</h1>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FiPhone />{" "}
                            <a href={`tel:+998912022444`}>+998912022444</a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <GoMail className="mt-1" />{" "}
                            <a href={`mailto:azimeliboev2000@gmail.com`}>
                                azimeliboev2000@gmail.com
                            </a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FaTelegramPlane className="mt-1" />{" "}
                            <a href={`https://t.me/Azimjon_Meliboev`}>
                                https://t.me/Azimjon_Meliboev
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-center items-center">
                        <h1 className="flex font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                            <TextTranslate id="authorSubTitle_2" />:
                        </h1>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] p-2 md:p-4 lg:py-10">
                    <div className="bg-gray-200 rounded-md p-4">
                        <div className="text-center">
                            <h1 className="font-semibold">Hatamov Fazliddin</h1>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FiPhone /> +998908526598
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <GoMail className="mt-1" />{" "}
                            hatamovfazliddin505@gmail.com
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FaTelegramPlane className="mt-1" />{" "}
                            https://t.me/fazliddin98
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;

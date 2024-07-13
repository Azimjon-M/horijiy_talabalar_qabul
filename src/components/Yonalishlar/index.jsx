import React, { useState } from "react";
import TextTranslate from "../TextTranslate";
import { dataBakalavr, dataMagistr } from "./db";
import { TiChevronLeftOutline } from "react-icons/ti";
import "./style.css";

const Yonalishlar = () => {
    const [height, setHeight] = useState(false);
    const [height2, setHeight2] = useState(false);

    const handleClick = () => {
        setHeight(!height);
    };

    const handleClick2 = () => {
        setHeight2(!height2);
    };

    return (
        <div className="lg:py-10 sm:py-5">
            <div>
                <h1 className="text-center text-[18px] lg:text-[24px] font-medium py-5">
                    <TextTranslate id={`homYonalishTitle`} />
                </h1>
                <div className="flex flex-col items-center justify-center px-4 lg:p-0">
                    <div
                        className={`${
                            height ? "max-h-[2000px]" : "h-[265px]"
                        } w-full lg:w-[1000px] relative overflow-hidden overflow-x-auto shadow-2xl costom-amimation`}
                    >
                        <div
                            onClick={handleClick}
                            className={`${
                                height ? "rotate-[90deg]" : "rotate-[-90deg]"
                            } absolute right-4 flex justify-center items-center bottom-1 bg-blue-400 z-10 rounded-full hover:bg-blue-500 hover:text-white active:scale-75`}
                        >
                            <TiChevronLeftOutline className="w-[30px] h-[30px] ms-[2px] my-[1px]" />
                        </div>
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <TextTranslate
                                            id={`homYonalishBakTitle`}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataBakalavr?.map((item, idx) => (
                                    <tr key={item.id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <TextTranslate id={item.title_id} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <br />
                    {/* id={`homYonalishMagTitle`} */}
                    <div
                        className={`${
                            height2 ? "max-h-[2000px]" : "h-[265px]"
                        } w-full lg:w-[1000px] relative overflow-hidden overflow-x-auto shadow-2xl costom-amimation`}
                    >
                        <div
                            onClick={handleClick2}
                            className={`${
                                height2 ? "rotate-[90deg]" : "rotate-[-90deg]"
                            } absolute right-4 flex justify-center items-center bottom-1 bg-blue-400 z-10 rounded-full hover:bg-blue-500 hover:text-white active:scale-75`}
                        >
                            <TiChevronLeftOutline className="w-[30px] h-[30px] ms-[2px] my-[1px]" />
                        </div>
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <TextTranslate
                                            id={`homYonalishMagTitle`}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataMagistr?.map((item, idx) => (
                                    <tr key={item.id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <TextTranslate id={item.title_id} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Yonalishlar;

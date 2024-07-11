import React from "react";
import { Link } from "react-router-dom";
import TextTranslate from "../TextTranslate";
import itParkIcon from "../../assets/icons/ItPark.png";

const Footer = () => {
    return (
        <div className="w-full bg-cyan-50">
            <div>
                <Link to="/authors">
                    <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white text-center py-4">
                        <div>
                            <TextTranslate id="footerContetn_1" />
                        </div>
                        <div className="flex flex-wrap justify-center items-center m-0">
                            <TextTranslate id="footerContetn_2" />
                            <span>
                                <img
                                    className="w-[20px] h-[20px] ms-2 me-[2px]"
                                    src={itParkIcon}
                                    alt="it park Logo"
                                />
                            </span>
                            <p>IT PARK</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;

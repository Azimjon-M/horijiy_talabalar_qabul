import React from "react";
import TextTranslate from "../TextTranslate";

const ArizaYuborishQollanma = () => {
    return (
        <div className="py-6">
            <div>
                <h1 className="text-center text-[18px] lg:text-[24px] font-medium py-5">
                    <TextTranslate id={`homArizaYuborishTitle`} />
                </h1>
                <div className="flex justify-center">
                    <a
                        href={`https://www.google.com`}
                        className="btn btn-sm md:btn-md btn-success text-white"
                    >
                        <TextTranslate id={`homArizaYuborishBtn`} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArizaYuborishQollanma;

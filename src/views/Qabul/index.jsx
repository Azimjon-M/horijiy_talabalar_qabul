import React from "react";
import { Link } from "react-router-dom";
import TextTranslate from '../../components/TextTranslate'

const Qabul = () => {
    return (
        <div className="w-full h-[calc(100vh-90px)] flex justify-center">
            <div className="flex flex-col gap-4 mt-32">
                <Link to="/qabul/bakalavr" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium"><TextTranslate id="qabBalavr" /></Link>
                <Link to="/qabul/magistr" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium"><TextTranslate id="qabMagistr" /></Link>
                <Link to="/qabul/phd" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium"><TextTranslate id="qabPhd" /></Link>
                <Link to="/qabul/dsc" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium"><TextTranslate id="qabDsc" /></Link>
            </div>
        </div>
    );
};

export default Qabul;

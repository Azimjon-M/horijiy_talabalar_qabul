import React from "react";
import { Link } from "react-router-dom";

const Qabul = () => {
    return (
        <div className="w-full h-[calc(100vh-90px)] flex justify-center">
            <div className="flex flex-col gap-4 mt-32">
                <Link to="/qabul/bakalavr" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium">Bakalavr</Link>
                <Link to="/qabul/magistr" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium">Magistr</Link>
                <Link to="/qabul/phd" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium">PhD Doktarantura</Link>
                <Link to="/qabul/dsc" className="w-full btn btn-outline btn-accent px-20 sm:text-[18px] font-medium">DsC Doktarantura</Link>
            </div>
        </div>
    );
};

export default Qabul;

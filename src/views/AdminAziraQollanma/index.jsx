import React, { useEffect, useRef, useState } from "react";
import APIArizaQollanma from "../../servises/admiArizaQollanma";
import { useNavigate } from "react-router-dom";

const AdminAziraQollanma = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const res = localStorage.getItem("token");
        if (!res) {
            navigate("/login");
        }
    }, [navigate]);

    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);
    const [err, setErr] = useState(false);

    const fileRef = useRef();

    const getData = async () => {
        try {
            const res = await APIArizaQollanma.get();
            if (res.status === 200 && res.statusText === "OK") {
                setData(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //Post
    const handleSubmit = () => {
        // Post
        if (file) {
            if (data?.length === 0) {
                APIArizaQollanma.post({ file: file }).then(() => {
                    fileRef.current.value = "";
                    getData();
                });
            }
            // Put
            else {
                APIArizaQollanma.put(data[0]?.id, { file: file }).then(() => {
                    fileRef.current.value = "";
                    getData();
                });
            }
        } else {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 2000);
        }
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!localStorage.getItem("token")) {
        return null;
    } else {
        return (
            <div>
                <h1 className="text-center text-[30px] font-medium mt-4">
                    Ariza qo'llanmasi
                </h1>
                <form className="max-w-[500px] flex flex-col gap-8 py-8 px-20">
                    <label className="text-[18px] font-medium">
                        Ariza qo'llanmasini{" "}
                        {data?.length === 0 ? "jo'natish" : "yangilash"}
                        <input
                            onChange={handleChange}
                            ref={fileRef}
                            id="file"
                            name="file"
                            type="file"
                            className={`${
                                err && "file-input-error"
                            } block file-input file-input-bordered file-input-sm lg:file-input-md mt-4 max-w-xs`}
                        />
                    </label>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className={`${
                            err ? "btn-error" : "btn-neutral"
                        } btn btn-sm lg:btn-md`}
                    >
                        {err
                            ? "Fayl yuklanmagan"
                            : data?.length === 0
                            ? "Jo'natish"
                            : "Yangilash"}
                    </button>
                </form>
            </div>
        );
    }
};

export default AdminAziraQollanma;

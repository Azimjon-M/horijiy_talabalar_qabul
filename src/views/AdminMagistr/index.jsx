import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useFormik } from "formik";
import { BiBlock } from "react-icons/bi";
import { RxArrowTopRight } from "react-icons/rx";
import { TextWarn } from "./styled";
import { MdEdit, MdDelete} from "react-icons/md";
import APIBakalavr from "../../servises/bakalavr";

const AdminMagistr = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const [load, setLoad] = useState(true);
    const [errTxt, setErrTxt] = useState(false);

    const [dataMud, setDataMud] = useState([]);
    const [dataRoy, setDataRoy] = useState([]);
    const [dataTol, setDataTol] = useState([]);
    const [dataTolMal, setDataTolMal] = useState([]);

    const [isEditMud, setIsEditMud] = useState(null);
    const [isEditRoy, setIsEditRoy] = useState(null);
    const [isEditTol, setIsEditTol] = useState(null);
    const [isEditTolMal, setIsEditTolMal] = useState(null);

    const getDataMud = () => {
        APIBakalavr.getMud()
            .then((res) => {
                setDataMud(res.data);
                setLoad(false);
            })
            .catch((err) => {
                setLoad(false);
                console.log(err);
            });
    };
    const getDataRoy = () => {
        APIBakalavr.getRoy()
            .then((res) => {
                setDataRoy(res.data);
                setLoad(false);
            })
            .catch((err) => {
                setLoad(false);
                console.log(err);
            });
    };
    const getDataTol = () => {
        APIBakalavr.getTol()
            .then((res) => {
                setDataTol(res.data);
                setLoad(false);
            })
            .catch((err) => {
                setLoad(false);
                console.log(err);
            });
    };
    const getDataTolMal = () => {
        APIBakalavr.getTolMal()
            .then((res) => {
                setDataTolMal(res.data);
                setLoad(false);
            })
            .catch((err) => {
                setLoad(false);
                console.log(err);
            });
    };

    const formik_Mud = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: (values) => {
            if (
                values.name_uz === "" ||
                values.name_ru === "" ||
                values.name_en === ""
            ) {
                setErrTxt(true);
                setTimeout(() => {
                    setErrTxt(false);
                }, 5000);
            } else {
                setLoad(true);
                APIBakalavr.postMud(values)
                    .then(() => {
                        getDataMud();
                    })
                    .catch((err) => console.log(err));
                formik_Mud.resetForm();
            }
        },
    });

    const formik_Roy = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: (values) => {
            if (
                values.name_uz === "" ||
                values.name_ru === "" ||
                values.name_en === ""
            ) {
                setErrTxt(true);
                setTimeout(() => {
                    setErrTxt(false);
                }, 5000);
            } else {
                setLoad(true);
                APIBakalavr.postRoy(values)
                    .then(() => {
                        getDataRoy();
                    })
                    .catch((err) => console.log(err));
                formik_Roy.resetForm();
            }
        },
    });

    const formik_Tol = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: (values) => {
            if (
                values.name_uz === "" ||
                values.name_ru === "" ||
                values.name_en === ""
            ) {
                setErrTxt(true);
                setTimeout(() => {
                    setErrTxt(false);
                }, 5000);
            } else {
                setLoad(true);
                APIBakalavr.postTol(values)
                    .then(() => {
                        getDataTol();
                    })
                    .catch((err) => console.log(err));
                formik_Tol.resetForm();
            }
        },
    });

    const formik_TolMal = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: (values) => {
            if (
                values.name_uz === "" ||
                values.name_ru === "" ||
                values.name_en === ""
            ) {
                setErrTxt(true);
                setTimeout(() => {
                    setErrTxt(false);
                }, 5000);
            } else {
                setLoad(true);
                APIBakalavr.postTolMal(values)
                    .then(() => {
                        getDataTolMal();
                    })
                    .catch((err) => console.log(err));
                formik_TolMal.resetForm();
            }
        },
    });

    const onDelMud = (id) => {
        if (isEditMud) {
            alert("Siz tahrirlash jarayonidasiz!");
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setLoad(true);
                APIBakalavr.delMud(id)
                    .then(() => {
                        getDataMud();
                        setIsEditMud(null);
                    })
                    .catch((err) => console.log(err));
            }
        }
    };

    const onDelRoy = (id) => {
        if (isEditRoy) {
            alert("Siz tahrirlash jarayonidasiz!");
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setLoad(true);
                APIBakalavr.delRoy(id)
                    .then(() => {
                        getDataRoy();
                        setIsEditRoy(null);
                    })
                    .catch((err) => console.log(err));
            }
        }
    };

    const onDelTol = (id) => {
        if (isEditTol) {
            alert("Siz tahrirlash jarayonidasiz!");
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setLoad(true);
                APIBakalavr.delTol(id)
                    .then(() => {
                        getDataTol();
                        setIsEditTol(null);
                    })
                    .catch((err) => console.log(err));
            }
        }
    };

    const onDelTolMal = (id) => {
        if (isEditTolMal) {
            alert("Siz tahrirlash jarayonidasiz!");
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setLoad(true);
                APIBakalavr.delTolMal(id)
                    .then(() => {
                        getDataTolMal();
                        setIsEditTolMal(null);
                    })
                    .catch((err) => console.log(err));
            }
        }
    };

    const onEditMud = ({ id, name_uz, name_ru, name_en }, boolean) => {
        if (boolean) {
            setLoad(true);
            const { id, ...res } = isEditMud;
            const data = res;
            APIBakalavr.patchMud(id, data)
                .then(() => {
                    getDataMud();
                })
                .catch((err) => console.log(err));
            setIsEditMud(null);
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setIsEditMud({ id, name_uz, name_ru, name_en });
            }
        }
    };

    const onEditRoy = ({ id, name_uz, name_ru, name_en }, boolean) => {
        if (boolean) {
            setLoad(true);
            const { id, ...res } = isEditRoy;
            const data = res;
            APIBakalavr.patchRoy(id, data)
                .then(() => {
                    getDataRoy();
                })
                .catch((err) => console.log(err));
            setIsEditRoy(null);
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setIsEditRoy({ id, name_uz, name_ru, name_en });
            }
        }
    };

    const onEditTol = ({ id, name_uz, name_ru, name_en }, boolean) => {
        if (boolean) {
            setLoad(true);
            const { id, ...res } = isEditTol;
            const data = res;
            APIBakalavr.patchTol(id, data)
                .then(() => {
                    getDataTol();
                })
                .catch((err) => console.log(err));
            setIsEditTol(null);
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setIsEditTol({ id, name_uz, name_ru, name_en });
            }
        }
    };

    const onEditTolMal = ({ id, name_uz, name_ru, name_en }, boolean) => {
        if (boolean) {
            setLoad(true);
            const { id, ...res } = isEditTolMal;
            const data = res;
            APIBakalavr.patchTolMal(id, data)
                .then(() => {
                    getDataTolMal();
                })
                .catch((err) => console.log(err));
            setIsEditTolMal(null);
        } else {
            const res = window.confirm("Ishonchingiz komilmi?");
            if (res) {
                setIsEditTolMal({ id, name_uz, name_ru, name_en });
            }
        }
    };

    const handleChangeEditMud = (e) => {
        setIsEditMud({
            ...isEditMud,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setLoad(true);
        getDataMud();
        getDataRoy();
        getDataTol();
        getDataTolMal();
    }, []);

    return (
        <div className="relative">
            <div
                className={`${
                    !load && "hidden "
                } z-50 fixed top-[60px] right-[15px] w-[calc(100%-310px)] h-[100vh] bg-[#0000002d] border boredr-[red] `}
            >
                <div className="w-full h-full flex justify-center items-center relative">
                    <Loader />
                </div>
            </div>
            <div className="w-full p-[10px] -z-10">
                <h1 className="text-center text-[1.8rem] font-medium mt-4">
                    Bakalavr
                </h1>
                <div className="w-full my-12">
                    <div>
                        <h1 className="text-[1.4rem] font-medium">Muddat</h1>
                        <form
                            className="flex items-center gap-2"
                            onSubmit={formik_Mud.handleSubmit}
                        >
                            <label className="w-[25%]" htmlFor="name_uz">
                                <h3>Muddat uz</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_uz"
                                    value={formik_Mud.values.name_uz}
                                    onChange={formik_Mud.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_ru">
                                <h3>Muddat ru</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_ru"
                                    value={formik_Mud.values.name_ru}
                                    onChange={formik_Mud.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_en">
                                <h3>Muddat en</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_en"
                                    value={formik_Mud.values.name_en}
                                    onChange={formik_Mud.handleChange}
                                />
                            </label>
                            <button
                                className={`${
                                    errTxt
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-400 hover:bg-blue-600"
                                } flex justify-center items-center gap-1 w-[25%] h-[48px] text-white mt-[18px] font-bold rounded-lg active:scale-95`}
                                type="submit"
                            >
                                JO'NATISH
                                {errTxt ? (
                                    <BiBlock />
                                ) : (
                                    <RxArrowTopRight className="font-bold text-[20px] mt-[2px]" />
                                )}
                            </button>
                        </form>
                        <TextWarn
                            className={`${
                                errTxt ? "inline-block" : "hidden"
                            } w-full font-medium text-center`}
                        >
                            Hamma kiritish bo'limlari kiritilishi shart!
                        </TextWarn>
                    </div>
                    <div className="mt-5">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-gray-200">
                                Bakalavr lavozimlari:
                            </div>
                            <div className="collapse-content">
                                {dataMud?.length !== 0 ? (
                                    <table className="table -z-0">
                                        <thead>
                                            <tr className="font-medium text-black">
                                                <th></th>
                                                <th>Uz</th>
                                                <th>Ru</th>
                                                <th>En</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataMud?.length !== 0 &&
                                                dataMud.map((item, idx) => (
                                                    <tr key={item.id}>
                                                        <th>{idx + 1}</th>
                                                        <td>
                                                            {isEditMud?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_uz"
                                                                    id="name_uz"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditMud
                                                                    }
                                                                    value={
                                                                        isEditMud.name_uz
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_uz
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditMud?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_ru"
                                                                    id="name_ru"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditMud
                                                                    }
                                                                    value={
                                                                        isEditMud.name_ru
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_ru
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditMud?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_en"
                                                                    id="name_en"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditMud
                                                                    }
                                                                    value={
                                                                        isEditMud.name_en
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_en
                                                            )}
                                                        </td>
                                                        <td className="flex gap-2">
                                                            <button
                                                                onClick={() =>
                                                                    onEditMud(
                                                                        item,
                                                                        isEditMud?.id ===
                                                                            item.id
                                                                    )
                                                                }
                                                                className={` ${
                                                                    isEditMud?.id ===
                                                                    item.id
                                                                        ? "bg-blue-400 hover:bg-blue-600"
                                                                        : "bg-gray-400 hover:bg-gray-600"
                                                                } flex items-center gap-2  rounded-md py-1 px-4 text-white font-medium active:scale-95`}
                                                            >
                                                                {isEditMud?.id ===
                                                                item.id ? (
                                                                    <>
                                                                        <span>
                                                                            Jo'natish
                                                                        </span>
                                                                        <RxArrowTopRight />
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <span>
                                                                            Tahrirlash
                                                                        </span>
                                                                        <MdEdit />
                                                                    </>
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    onDelMud(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="flex items-center gap-2 bg-red-500 rounded-md py-1 px-4 text-white font-medium hover:bg-red-600 active:scale-95"
                                                            >
                                                                <span>
                                                                    O'CHIRISH
                                                                </span>
                                                                <MdDelete />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="ms-4 text-red-600">
                                        Ma'lumot mavjud emas!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMagistr;

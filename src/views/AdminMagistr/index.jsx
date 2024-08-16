import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useFormik } from "formik";
import { BiBlock } from "react-icons/bi";
import { RxArrowTopRight } from "react-icons/rx";
import { TextWarn } from "./styled";
import { MdEdit, MdDelete } from "react-icons/md";
import APIMagistr from "../../servises/magistr";

const AdminMagistr = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const [load, setLoad] = useState(true);
    const [errTxtMud, setErrTxtMud] = useState(false);
    const [errTxtRoy, setErrTxtRoy] = useState(false);
    const [errTxtTol, setErrTxtTol] = useState(false);
    const [errTxtTolMal, setErrTxtTolMal] = useState(false);

    const [dataMud, setDataMud] = useState([]);
    const [dataRoy, setDataRoy] = useState([]);
    const [dataTol, setDataTol] = useState([]);
    const [dataTolMal, setDataTolMal] = useState([]);

    const [isEditMud, setIsEditMud] = useState(null);
    const [isEditRoy, setIsEditRoy] = useState(null);
    const [isEditTol, setIsEditTol] = useState(null);
    const [isEditTolMal, setIsEditTolMal] = useState(null);

    const getDataMud = () => {
        APIMagistr.getMud()
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
        APIMagistr.getRoy()
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
        APIMagistr.getTol()
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
        APIMagistr.getTolMal()
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
                setErrTxtMud(true);
                setTimeout(() => {
                    setErrTxtMud(false);
                }, 5000);
            } else {
                setLoad(true);
                APIMagistr.postMud(values)
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
                setErrTxtRoy(true);
                setTimeout(() => {
                    setErrTxtRoy(false);
                }, 5000);
            } else {
                setLoad(true);
                APIMagistr.postRoy(values)
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
                setErrTxtTol(true);
                setTimeout(() => {
                    setErrTxtTol(false);
                }, 5000);
            } else {
                setLoad(true);
                APIMagistr.postTol(values)
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
                setErrTxtTolMal(true);
                setTimeout(() => {
                    setErrTxtTolMal(false);
                }, 5000);
            } else {
                setLoad(true);
                APIMagistr.postTolMal(values)
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
                APIMagistr.delMud(id)
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
                APIMagistr.delRoy(id)
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
                APIMagistr.delTol(id)
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
                APIMagistr.delTolMal(id)
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
            APIMagistr.patchMud(id, data)
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
            APIMagistr.patchRoy(id, data)
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
            APIMagistr.patchTol(id, data)
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
            APIMagistr.patchTolMal(id, data)
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

    const handleChangeEditRoy = (e) => {
        setIsEditRoy({
            ...isEditRoy,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeEditTol = (e) => {
        setIsEditTol({
            ...isEditTol,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeEditTolMal = (e) => {
        setIsEditTolMal({
            ...isEditTolMal,
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
        <div className="relative px-10">
            <div
                className={`${
                    !load && "hidden "
                } z-50 fixed top-[30px] right-[0px] w-[calc(100%-250px)] 2xl:w-[calc(100%-258px)] h-[100vh] bg-[#0000002d] border boredr-[red] `}
            >
                <div className="w-full h-full flex justify-center items-center relative">
                    <Loader />
                </div>
            </div>
            <div className="w-full p-[10px] -z-10">
                <h1 className="text-center text-[1.8rem] font-medium mt-4">
                    Magistr
                </h1>
                <div className="w-full my-12">
                    <div>
                        <h1 className="text-[1.4rem] font-medium">
                            Hujjatlarini topshirish muddatlari:
                        </h1>
                        <form
                            className="flex items-center gap-2"
                            onSubmit={formik_Mud.handleSubmit}
                        >
                            <label className="w-[25%]" htmlFor="name_uz">
                                <h3>UZ</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_uz"
                                    value={formik_Mud.values.name_uz}
                                    onChange={formik_Mud.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_ru">
                                <h3>RU</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_ru"
                                    value={formik_Mud.values.name_ru}
                                    onChange={formik_Mud.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_en">
                                <h3>EN</h3>
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
                                    errTxtMud
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-400 hover:bg-blue-600"
                                } flex justify-center items-center gap-1 w-[25%] h-[48px] text-white mt-[18px] font-bold rounded-lg active:scale-95`}
                                type="submit"
                            >
                                JO'NATISH
                                {errTxtMud ? (
                                    <BiBlock />
                                ) : (
                                    <RxArrowTopRight className="font-bold text-[20px] mt-[2px]" />
                                )}
                            </button>
                        </form>
                        <TextWarn
                            className={`${
                                errTxtMud ? "inline-block" : "hidden"
                            } w-full font-medium text-center`}
                        >
                            Hamma kiritish bo'limlari kiritilishi shart!
                        </TextWarn>
                    </div>
                    <div className="mt-5">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-gray-200">
                                Hujjatlarini topshirish muddat ma'lumotlari:
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

                {/* Royhat */}
                <div className="w-full my-12">
                    <div>
                        <h1 className="text-[1.4rem] font-medium">
                            Kerak bo'lgan hujjatlar ro'yxati:
                        </h1>
                        <form
                            className="flex items-center gap-2"
                            onSubmit={formik_Roy.handleSubmit}
                        >
                            <label className="w-[25%]" htmlFor="name_uz">
                                <h3>UZ</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_uz"
                                    value={formik_Roy.values.name_uz}
                                    onChange={formik_Roy.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_ru">
                                <h3>RU</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_ru"
                                    value={formik_Roy.values.name_ru}
                                    onChange={formik_Roy.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_en">
                                <h3>EN</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_en"
                                    value={formik_Roy.values.name_en}
                                    onChange={formik_Roy.handleChange}
                                />
                            </label>
                            <button
                                className={`${
                                    errTxtRoy
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-400 hover:bg-blue-600"
                                } flex justify-center items-center gap-1 w-[25%] h-[48px] text-white mt-[18px] font-bold rounded-lg active:scale-95`}
                                type="submit"
                            >
                                JO'NATISH
                                {errTxtRoy ? (
                                    <BiBlock />
                                ) : (
                                    <RxArrowTopRight className="font-bold text-[20px] mt-[2px]" />
                                )}
                            </button>
                        </form>
                        <TextWarn
                            className={`${
                                errTxtRoy ? "inline-block" : "hidden"
                            } w-full font-medium text-center`}
                        >
                            Hamma kiritish bo'limlari kiritilishi shart!
                        </TextWarn>
                    </div>
                    <div className="mt-5">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-gray-200">
                                Kerak bo'lgan hujjatlar ma'lumotlari:
                            </div>
                            <div className="collapse-content">
                                {dataRoy?.length !== 0 ? (
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
                                            {dataRoy?.length !== 0 &&
                                                dataRoy.map((item, idx) => (
                                                    <tr key={item.id}>
                                                        <th>{idx + 1}</th>
                                                        <td>
                                                            {isEditRoy?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_uz"
                                                                    id="name_uz"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditRoy
                                                                    }
                                                                    value={
                                                                        isEditRoy.name_uz
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_uz
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditRoy?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_ru"
                                                                    id="name_ru"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditRoy
                                                                    }
                                                                    value={
                                                                        isEditRoy.name_ru
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_ru
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditRoy?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_en"
                                                                    id="name_en"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditRoy
                                                                    }
                                                                    value={
                                                                        isEditRoy.name_en
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_en
                                                            )}
                                                        </td>
                                                        <td className="flex gap-2">
                                                            <button
                                                                onClick={() =>
                                                                    onEditRoy(
                                                                        item,
                                                                        isEditRoy?.id ===
                                                                            item.id
                                                                    )
                                                                }
                                                                className={` ${
                                                                    isEditRoy?.id ===
                                                                    item.id
                                                                        ? "bg-blue-400 hover:bg-blue-600"
                                                                        : "bg-gray-400 hover:bg-gray-600"
                                                                } flex items-center gap-2  rounded-md py-1 px-4 text-white font-medium active:scale-95`}
                                                            >
                                                                {isEditRoy?.id ===
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
                                                                    onDelRoy(
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

                {/* Tolov haqida */}
                <div className="w-full my-12">
                    <div>
                        <h1 className="text-[1.4rem] font-medium">
                            To'lov haqida :
                        </h1>
                        <form
                            className="flex items-center gap-2"
                            onSubmit={formik_Tol.handleSubmit}
                        >
                            <label className="w-[25%]" htmlFor="name_uz">
                                <h3>UZ</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_uz"
                                    value={formik_Tol.values.name_uz}
                                    onChange={formik_Tol.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_ru">
                                <h3>RU</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_ru"
                                    value={formik_Tol.values.name_ru}
                                    onChange={formik_Tol.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_en">
                                <h3>EN</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_en"
                                    value={formik_Tol.values.name_en}
                                    onChange={formik_Tol.handleChange}
                                />
                            </label>
                            <button
                                className={`${
                                    errTxtTol
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-400 hover:bg-blue-600"
                                } flex justify-center items-center gap-1 w-[25%] h-[48px] text-white mt-[18px] font-bold rounded-lg active:scale-95`}
                                type="submit"
                            >
                                JO'NATISH
                                {errTxtTol ? (
                                    <BiBlock />
                                ) : (
                                    <RxArrowTopRight className="font-bold text-[20px] mt-[2px]" />
                                )}
                            </button>
                        </form>
                        <TextWarn
                            className={`${
                                errTxtTol ? "inline-block" : "hidden"
                            } w-full font-medium text-center`}
                        >
                            Hamma kiritish bo'limlari kiritilishi shart!
                        </TextWarn>
                    </div>
                    <div className="mt-5">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-gray-200">
                                To'lov ma'lumotlari:
                            </div>
                            <div className="collapse-content">
                                {dataTol?.length !== 0 ? (
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
                                            {dataTol?.length !== 0 &&
                                                dataTol.map((item, idx) => (
                                                    <tr key={item.id}>
                                                        <th>{idx + 1}</th>
                                                        <td>
                                                            {isEditTol?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_uz"
                                                                    id="name_uz"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTol
                                                                    }
                                                                    value={
                                                                        isEditTol.name_uz
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_uz
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditTol?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_ru"
                                                                    id="name_ru"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTol
                                                                    }
                                                                    value={
                                                                        isEditTol.name_ru
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_ru
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditTol?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_en"
                                                                    id="name_en"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTol
                                                                    }
                                                                    value={
                                                                        isEditTol.name_en
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_en
                                                            )}
                                                        </td>
                                                        <td className="flex gap-2">
                                                            <button
                                                                onClick={() =>
                                                                    onEditTol(
                                                                        item,
                                                                        isEditTol?.id ===
                                                                            item.id
                                                                    )
                                                                }
                                                                className={` ${
                                                                    isEditTol?.id ===
                                                                    item.id
                                                                        ? "bg-blue-400 hover:bg-blue-600"
                                                                        : "bg-gray-400 hover:bg-gray-600"
                                                                } flex items-center gap-2  rounded-md py-1 px-4 text-white font-medium active:scale-95`}
                                                            >
                                                                {isEditTol?.id ===
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
                                                                    onDelTol(
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

                {/* To'liq ma'lumot */}
                <div className="w-full my-12">
                    <div>
                        <h1 className="text-[1.4rem] font-medium">
                            To'liq ma'lumotlarni olish uchun bog'lanish:
                        </h1>
                        <form
                            className="flex items-center gap-2"
                            onSubmit={formik_TolMal.handleSubmit}
                        >
                            <label className="w-[25%]" htmlFor="name_uz">
                                <h3>UZ</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_uz"
                                    value={formik_TolMal.values.name_uz}
                                    onChange={formik_TolMal.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_ru">
                                <h3>RU</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_ru"
                                    value={formik_TolMal.values.name_ru}
                                    onChange={formik_TolMal.handleChange}
                                />
                            </label>
                            <label className="w-[25%]" htmlFor="name_en">
                                <h3>EN</h3>
                                <textarea
                                    className="w-full input input-bordered px-[7px]"
                                    type="text"
                                    id="name_en"
                                    value={formik_TolMal.values.name_en}
                                    onChange={formik_TolMal.handleChange}
                                />
                            </label>
                            <button
                                className={`${
                                    errTxtTolMal
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-400 hover:bg-blue-600"
                                } flex justify-center items-center gap-1 w-[25%] h-[48px] text-white mt-[18px] font-bold rounded-lg active:scale-95`}
                                type="submit"
                            >
                                JO'NATISH
                                {errTxtTolMal ? (
                                    <BiBlock />
                                ) : (
                                    <RxArrowTopRight className="font-bold text-[20px] mt-[2px]" />
                                )}
                            </button>
                        </form>
                        <TextWarn
                            className={`${
                                errTxtTolMal ? "inline-block" : "hidden"
                            } w-full font-medium text-center`}
                        >
                            Hamma kiritish bo'limlari kiritilishi shart!
                        </TextWarn>
                    </div>
                    <div className="mt-5">
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-gray-200">
                                To'liq ma'lumotlarni olish uchun bog'lanish ma'lumotlari:
                            </div>
                            <div className="collapse-content">
                                {dataTolMal?.length !== 0 ? (
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
                                            {dataTolMal?.length !== 0 &&
                                                dataTolMal.map((item, idx) => (
                                                    <tr key={item.id}>
                                                        <th>{idx + 1}</th>
                                                        <td>
                                                            {isEditTolMal?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_uz"
                                                                    id="name_uz"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTolMal
                                                                    }
                                                                    value={
                                                                        isEditTolMal.name_uz
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_uz
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditTolMal?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_ru"
                                                                    id="name_ru"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTolMal
                                                                    }
                                                                    value={
                                                                        isEditTolMal.name_ru
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_ru
                                                            )}
                                                        </td>
                                                        <td>
                                                            {isEditTolMal?.id ===
                                                            item.id ? (
                                                                <textarea
                                                                    type="text"
                                                                    name="name_en"
                                                                    id="name_en"
                                                                    className="w-full input input-bordered px-[7px]"
                                                                    onChange={
                                                                        handleChangeEditTolMal
                                                                    }
                                                                    value={
                                                                        isEditTolMal.name_en
                                                                    }
                                                                />
                                                            ) : (
                                                                item.name_en
                                                            )}
                                                        </td>
                                                        <td className="flex gap-2">
                                                            <button
                                                                onClick={() =>
                                                                    onEditTolMal(
                                                                        item,
                                                                        isEditTolMal?.id ===
                                                                            item.id
                                                                    )
                                                                }
                                                                className={` ${
                                                                    isEditTolMal?.id ===
                                                                    item.id
                                                                        ? "bg-blue-400 hover:bg-blue-600"
                                                                        : "bg-gray-400 hover:bg-gray-600"
                                                                } flex items-center gap-2  rounded-md py-1 px-4 text-white font-medium active:scale-95`}
                                                            >
                                                                {isEditTolMal?.id ===
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
                                                                    onDelTolMal(
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

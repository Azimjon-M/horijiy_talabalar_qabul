import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import Footer from "../../components/Footer";
import TextTranslate from "../../components/TextTranslate";
import APIPostAriza from "../../servises/postAriza";
import * as Yup from "yup";
const ArizaYuborish = () => {
    const [success, setSuccess] = useState(false);

    const [filePas, setFilePas] = useState(null);
    const [fileDip, setFileDip] = useState(null);
    const [errPas, setErrPas] = useState(false);
    const [errDip, setErrDip] = useState(false);

    const fileRefPas = useRef();
    const fileRefDip = useRef();

    const SignupSchema = Yup.object().shape({
        familya: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        ism: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        fuqaroligi: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        tugatgan_oligoh: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        telefon_nomer: Yup.string()
            .min(3, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            ism: "",
            familya: "",
            sharif: "",
            fuqaroligi: "",
            tugatgan_oligoh: "",
            email: "",
            telegram_name: "",
            whatsapp_name: "",
            telefon_nomer: "",
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            values.whatsapp_name = String(values.whatsapp_name);
            !filePas ? setErrPas(true) : setErrPas(false);
            !fileDip ? setErrDip(true) : setErrDip(false);
            const res = { ...values, pasport: filePas, diplom: fileDip };
            console.log(res);
            if (filePas && fileDip) {
                try {
                    // setSuccess(true);
                    await APIPostAriza.post(res);
                    formik.resetForm();
                    fileRefPas.current.value = "";
                    fileRefDip.current.value = "";
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log("fayllar yetib kelmagan");
            }
        },
    });

    // files
    // // Post
    // if (file) {
    //     if (data?.length === 0) {
    //         APIArizaQollanma.post({ file: file }).then(() => {
    //             fileRef.current.value = "";
    //             getData();
    //         });
    //     }
    //     // Put
    //     else {
    //         APIArizaQollanma.put(data[0]?.id, { file: file }).then(() => {
    //             fileRef.current.value = "";
    //             getData();
    //         });
    //     }
    // } else {
    //     setErr(true);
    //     setTimeout(() => {
    //         setErr(false);
    //     }, 2000);
    // }

    const handleChangePas = (e) => {
        setFilePas(e.target.files[0]);
    };

    const handleChangeDip = (e) => {
        setFileDip(e.target.files[0]);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {success ? (
                <div className="w-full h-[90vh] flex items-center justify-center">
                    <h1 className="text-center text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold text-green-500">
                        <TextTranslate id={`arizaSuccess`} />
                    </h1>
                </div>
            ) : (
                <div className="shadow-2xl py-8 px-10 rounded-lg mt-10 mb-20">
                    <form
                        className="w-full md:w-[400px] flex flex-col"
                        onSubmit={formik.handleSubmit}
                    >
                        {/* Ism */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaIsm`} />
                                </span>
                            </div>
                            <input
                                className={`${
                                    formik.errors.ism && "border border-red-600"
                                } input input-bordered w-full`}
                                id="ism"
                                name="ism"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.ism}
                            />
                        </label>
                        {/* Familya */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaFaliliya`} />
                                </span>
                            </div>
                            <input
                                className={`${
                                    formik.errors.familya &&
                                    "border border-red-600"
                                } input input-bordered w-full`}
                                id="familya"
                                name="familya"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.familya}
                            />
                        </label>
                        {/* Sharif */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaSharif`} />
                                </span>
                            </div>
                            <input
                                className={`input input-bordered w-full`}
                                id="sharif"
                                name="sharif"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.sharif}
                            />
                        </label>
                        {/* Fuqaroligi */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaFuqaro`} />
                                </span>
                            </div>
                            <textarea
                                className={`${
                                    formik.errors.fuqaroligi &&
                                    "border border-red-600"
                                } input input-bordered w-full`}
                                id="fuqaroligi"
                                name="fuqaroligi"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.fuqaroligi}
                            />
                        </label>
                        {/* Pasport file */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaPassport`} />
                                </span>
                            </div>
                            <input
                                onChange={handleChangePas}
                                ref={fileRefPas}
                                id="pasport"
                                name="pasport"
                                type="file"
                                className={`${
                                    errPas && "file-input-error"
                                } block file-input file-input-bordered file-input-sm lg:file-input-md max-w-xs`}
                            />
                        </label>
                        {/* Diplom file */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaDiplom`} />
                                </span>
                            </div>
                            <input
                                onChange={handleChangeDip}
                                ref={fileRefDip}
                                id="diplom"
                                name="diplom"
                                type="file"
                                className={`${
                                    errDip && "file-input-error"
                                } block file-input file-input-bordered file-input-sm lg:file-input-md max-w-xs`}
                            />
                        </label>
                        {/* Ta'lim ma'lumot */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaOxirgiTalim`} />
                                </span>
                            </div>
                            <textarea
                                className={`${
                                    formik.errors.tugatgan_oligoh &&
                                    "border border-red-600"
                                } input input-bordered w-full`}
                                id="tugatgan_oligoh"
                                name="tugatgan_oligoh"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.tugatgan_oligoh}
                            />
                        </label>
                        {/* Tel */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaTel`} />
                                </span>
                            </div>
                            <input
                                className={`${
                                    formik.errors.telefon_nomer &&
                                    "border border-red-600"
                                } input input-bordered w-full`}
                                id="telefon_nomer"
                                name="telefon_nomer"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.telefon_nomer}
                            />
                        </label>
                        {/* Email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                className={`${
                                    formik.errors.email &&
                                    "border border-red-600"
                                } input input-bordered w-full`}
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </label>
                        {/* Tg */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaTg`} />
                                </span>
                            </div>
                            <input
                                className={`input input-bordered w-full`}
                                id="telegram_name"
                                name="telegram_name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.telegram_name}
                            />
                        </label>
                        {/* WatsApp */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">
                                    <TextTranslate id={`arizaWatsApp`} />
                                </span>
                            </div>
                            <div className="w-full join">
                                <input
                                    className={`input input-bordered w-full`}
                                    id="whatsapp_name"
                                    name="whatsapp_name"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.whatsapp_name}
                                />
                            </div>
                        </label>

                        <button
                            type="submit"
                            className="btn btn-success text-white font-medium mt-6"
                        >
                            <TextTranslate id={`arizaBtn`} />
                        </button>
                    </form>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ArizaYuborish;

import React, { useRef, useState, useContext, useMemo, useEffect } from "react";
import { useFormik } from "formik";
import Footer from "../../components/Footer";
import TextTranslate from "../../components/TextTranslate";
import APIPostAriza from "../../servises/postAriza";
import { TogglerLang } from "../../context/language";
import { dataBakalavr, dataMagistr } from "../../components/Yonalishlar/db";

import langData from "../../language/idex.json";

import * as Yup from "yup";

const ArizaYuborish = () => {
    const [success, setSuccess] = useState(false);

    const [filePas, setFilePas] = useState(null);
    const [fileDip, setFileDip] = useState(null);
    const [errPas, setErrPas] = useState(false);
    const [errDip, setErrDip] = useState(false);

    const { isLang } = useContext(TogglerLang);

    const dataTD = useMemo(
        () => [
            {
                id: 1,
                name_uz: "Bakalavr",
                name_ru: "Бакалавр",
                name_en: "Bachelor",
            },
            {
                id: 2,
                name_uz: "Magistratura",
                name_ru: "Магистратура",
                name_en: "Master",
            },
            {
                id: 3,
                name_uz: "PHD",
                name_ru: "PHD",
                name_en: "PHD",
                hidden: true,
            },
            {
                id: 4,
                name_uz: "DSC",
                name_ru: "DSC",
                name_en: "DSC",
                hidden: true,
            },
        ],
        []
    );

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
        daraja: Yup.string().required("Required"),
        yonalish: Yup.string().required("Required"),
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
            daraja: `${dataTD[0][`name_${isLang}`]}`,
            yonalish: `${langData[isLang][dataBakalavr[0].title_id]}`,
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            values.whatsapp_name = String(values.whatsapp_name);
            !filePas ? setErrPas(true) : setErrPas(false);
            !fileDip ? setErrDip(true) : setErrDip(false);
            const res = { ...values, pasport: filePas, diplom: fileDip };
            if (filePas && fileDip) {
                setSuccess(true);
                await APIPostAriza.post(res);
                formik.resetForm();
                fileRefPas.current.value = "";
                fileRefDip.current.value = "";
            }
        },
    });

    const handleChangePas = (e) => {
        setFilePas(e.target.files[0]);
        setErrPas(false);
    };

    const handleChangeDip = (e) => {
        setFileDip(e.target.files[0]);
        setErrDip(false);
    };

    const { values, setFieldValue } = formik; // formik'dan kerakli qismlarni ajratib olish

    useEffect(() => {
        const selectedData =
            values.daraja === "Bakalavr" ? dataBakalavr : dataMagistr;
        if (selectedData.length > 0) {
            const firstOption = langData[isLang][selectedData[0].title_id];
            setFieldValue("yonalish", firstOption); // 2-selectning birinchi elementi
        }
    }, [values.daraja, isLang, setFieldValue]); // Faqat kerakli dependency'larni qo'shish

    return (
        <div className="flex flex-col items-center justify-center">
            {success ? (
                <div className="w-full h-[90vh] flex flex-col items-center justify-center">
                    <div className="text-center text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold text-green-500">
                        <TextTranslate id={`arizaSuccess`} />
                    </div>
                    <div className="flex text-[20px] md:text-[22px] lg:text-[34px] xl:text-[26px] 2xl:text-[30px] font-medium">
                        <TextTranslate id={`arizaSuccessContetnt`} /> 😊
                    </div>
                </div>
            ) : (
                <div className="shadow-2xl py-8 px-10 rounded-lg mt-10 mb-20">
                    <form
                        className="w-full md:w-[400px] xl:w-[900px] 2xl:w-[1000px] flex flex-col"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="flex flex-col xl:flex-row xl:gap-x-6 2xl:gap-x-10">

                            <div className="w-full xl:w-[50%]">
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
                            </div>
                            <div className="w-full xl:w-[50%]">
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
                                {/* Talim darajasi */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            <TextTranslate id={`arizaDaraja`} />
                                        </span>
                                    </div>
                                    <select
                                        className={`${
                                            formik.errors.daraja &&
                                            "border border-red-600"
                                        } select select-bordered w-full max-w-xs`}
                                        id="daraja"
                                        name="daraja"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.daraja}
                                    >
                                        {dataTD?.map((item) => {
                                            return (
                                                <option
                                                    value={item[`name_${isLang}`]}
                                                    key={item.id}
                                                    disabled={item.hidden}
                                                >
                                                    {item[`name_${isLang}`]}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </label>
                                {/* Talim yonalishi */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                        <TextTranslate id={`arizaYonalish`} />
                                        </span>
                                    </div>
                                    <select
                                        className={`${
                                            formik.errors.yonalish &&
                                            "border border-red-600"
                                        } select select-bordered w-full max-w-xs`}
                                        id="yonalish"
                                        name="yonalish"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.yonalish}
                                    >
                                        {formik.values.daraja === "Bakalavr"
                                            ? dataBakalavr.map((item) => {
                                                const translatedValue =
                                                    langData[isLang][item.title_id];
                                                return (
                                                    <option
                                                        key={item.id}
                                                        value={translatedValue}
                                                    >
                                                        {translatedValue}
                                                    </option>
                                                );
                                            })
                                            : dataMagistr.map((item) => {
                                                const translatedValue =
                                                    langData[isLang][item.title_id];
                                                return (
                                                    <option
                                                        key={item.id}
                                                        value={translatedValue}
                                                    >
                                                        {translatedValue}
                                                    </option>
                                                );
                                            })}
                                    </select>
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
                            </div>
                        </div>

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

import React from "react";
import { useFormik } from "formik";
import Footer from "../../components/Footer";
import TextTranslate from "../../components/TextTranslate";

const ArizaYuborish = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="shadow-2xl py-8 px-10 rounded-lg mt-10 mb-20">
                <form
                    className="w-full md:w-[400px] flex flex-col"
                    onSubmit={formik.handleSubmit}
                >
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">
                                <TextTranslate id={`arizaIsm`} />
                            </span>
                        </div>
                        <input
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">
                                <TextTranslate id={`arizaFaliliya`} />
                            </span>
                        </div>
                        <input
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">
                                <TextTranslate id={`arizaFuqaro`} />
                            </span>
                        </div>
                        <textarea
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">
                                <TextTranslate id={`arizaOxirgiTalim`} />
                            </span>
                        </div>
                        <textarea
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">
                                Telegram username/number
                            </span>
                        </div>
                        <input
                            className="input input-bordered w-full"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">WatsApp</span>
                        </div>
                        <div className="w-full join">
                            <div className="flex justify-center items-center bg-gray-400 join-item rounded-r-full px-4">
                                +
                            </div>
                            <input
                                className="w-full input input-bordered join-item"
                                id="firstName"
                                name="firstName"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                        </div>
                    </label>

                    <button
                        type="submit"
                        className="btn btn-success text-white font-medium mt-6"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ArizaYuborish;

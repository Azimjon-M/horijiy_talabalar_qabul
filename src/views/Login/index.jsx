import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import APILogin from "../../servises/login";

const Login = () => {
    const navigate = useNavigate();
    // const [{ username, password }] = [
    //     { username: "admin", password: "admin123" },
    // ];
    const [err, setErr] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            const res = await APILogin.post(values);
            console.log("Response: ", res);
            console.log(values);

            // if (!err) {
            //     if (
            //         values.username === username &&
            //         values.password === password
            //     ) {
            //         navigate("/admin-panel");
            //     } else {
            //         setErr(true);
            //         setTimeout(() => {
            //             setErr(false);
            //         }, 3000);
            //     }
            // }
        },
    });

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="shadow-2xl py-8 px-10 rounded-lg mt-10 mb-20">
                <h1 className="text-center text-[20px] font-medium">
                    Welcom back
                </h1>
                <form
                    className="w-full md:w-[400px] flex flex-col"
                    onSubmit={formik.handleSubmit}
                >
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Username</span>
                        </div>
                        <input
                            className={`${
                                err && "border-red-600"
                            } input input-bordered w-full`}
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            autoComplete="off"
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            className={`${
                                err && "border-red-600"
                            } input input-bordered w-full`}
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            autoComplete="off"
                        />
                    </label>

                    <button
                        type="submit"
                        className={`${
                            err ? "btn-error" : "btn-success"
                        } btn text-white font-medium mt-6`}
                    >
                        {err ? "Wrong!" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

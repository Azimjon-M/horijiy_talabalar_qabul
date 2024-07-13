import React, { useEffect, useState } from "react";
import APIAriza from "../../servises/adminAriza";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const res = localStorage.getItem("token");
        if (!res) {
            navigate("/login");
        }
    }, [navigate]);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await APIAriza.get();
            setData(res?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    if (!localStorage.getItem("token")) {
        return null;
    } else {
        return (
            <div>
                <h1 className="text-center text-[30px] font-medium my-4">
                    Arizalar
                </h1>
                <div className="flex flex-wrap gap-2 py-8 px-12">
                    {data?.length !== 0 ? (
                        data?.map((item) => (
                            <div
                                className="w-[300px] border border-gray-100 shadow-xl rounded-xl p-4"
                                key={item.id}
                            >
                                <div className="text-end">{item.vaqt}</div>
                                <div>
                                    <b>Ism: </b> {item.ism}
                                </div>
                                <div>
                                    <b>Familiya: </b>
                                    {item.familya}
                                </div>
                                <div>
                                    <b>Fuaroligi: </b> {item.fuqaroligi}
                                </div>
                                <div>
                                    <b>Talim ma'lumoti: </b>{" "}
                                    {item.tugatgan_oligoh}
                                </div>
                                <div>
                                    <b>Email: </b> {item.email}
                                </div>
                                <div>
                                    <b>Tel no'mer: </b>
                                    {item.telefon_nomer}
                                </div>
                                <div>
                                    <b>Telegram: </b>
                                    {item.telegram_name}
                                </div>
                                <div>
                                    <b>WatsApp: </b>
                                    {item.whatsapp_name}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-[red]">Ma'lumot kiritilmagan!</div>
                    )}
                </div>
            </div>
        );
    }
};

export default AdminPanel;

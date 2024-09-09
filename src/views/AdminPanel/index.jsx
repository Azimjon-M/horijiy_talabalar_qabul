import React, { useEffect, useState } from "react";
import APIAriza from "../../servises/adminAriza";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            await APIAriza.get().then((res) => {
                const sortedData = res.data.sort((a, b) => {
                    return new Date(b.vaqt) - new Date(a.vaqt);
                });
                setData(sortedData);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const handleDel = async (id) => {
        const res = window.confirm("Ishonchingiz komilmi?");
        if (res) {
            await APIAriza.del(id).then(() => getData());
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
                        data?.map((item) => {
                            const year = item.vaqt.slice(0, 4);
                            const month = item.vaqt.slice(5, 7);
                            const day = item.vaqt.slice(8, 10);
                            const hour = item.vaqt.slice(11, 16);

                            return (
                                <div
                                    className="w-[350px] flex flex-col justify-between border border-gray-100 shadow-xl rounded-xl p-4"
                                    key={item.id}
                                >
                                    <div>
                                        <div className="text-end">{`${year}.${month}.${day} ${hour}`}</div>
                                        <div>
                                            <b>Ism: </b> {item.ism}
                                        </div>
                                        <div>
                                            <b>Familiya: </b>
                                            {item.familya}
                                        </div>
                                        {item.sharif === "" ? (
                                            <div className="flex">
                                                <b>Sharifi: </b>
                                                <p>(Kiritilmagan)</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <b>Sharifi: </b>
                                                {item.sharif}
                                            </div>
                                        )}
                                        <div>
                                            <b>Fuaroligi: </b> {item.fuqaroligi}
                                        </div>
                                        <div>
                                            <b>Talim ma'lumoti: </b>{" "}
                                            {item.tugatgan_oligoh}
                                        </div>
                                        <div>
                                            <b>Talim darajasi: </b>{" "}
                                            {item.daraja}
                                        </div>
                                        <div>
                                            <b>Talim yo'nalish: </b>{" "}
                                            {item.yonalish}
                                        </div>
                                        <div>
                                            <b>Email: </b> {item.email}
                                        </div>
                                        <div>
                                            <b>Tel no'mer: </b>+
                                            {item.telefon_nomer}
                                        </div>
                                        {item.telegram_name === "" ? (
                                            <div className="flex">
                                                <b>Telegram: </b>
                                                <p>(Kiritilmagan)</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <b>Telegram: </b>
                                                {item.telegram_name}
                                            </div>
                                        )}
                                        {item.whatsapp_name === "" ? (
                                            <div className="flex">
                                                <b>WatsApp: </b>
                                                <p>(Kiritilmagan)</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <b>WatsApp: </b>+
                                                {item.whatsapp_name}
                                            </div>
                                        )}
                                        <div className="mt-2">
                                            <b>Passport: </b>
                                            <a
                                                target={`_blank`}
                                                href={item.pasport}
                                                className="btn btn-sm"
                                            >
                                                Yuklab olish
                                            </a>
                                        </div>
                                        <div className="mt-2">
                                            <b>Diplom: </b>
                                            <a
                                                target={`_blank`}
                                                href={item.diplom}
                                                className="btn btn-sm"
                                            >
                                                Yuklab olish
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end items-end">
                                        <button
                                            className="btn btn-error float-end mt-6"
                                            onClick={() => handleDel(item.id)}
                                        >
                                            O'chirish
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-[red]">Ariza kelib tushmagan!</div>
                    )}
                </div>
            </div>
        );
    }
};

export default AdminPanel;

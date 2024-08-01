import React, { useEffect, useState } from "react";
import APIBakalavr from "../../servises/bakalavr";

const Bakalavr = () => {
    const [dataMud, setDataMud] = useState([
        { id: 1, name: "aisdhjio spodk sdkos asikdpoajsoi iosjdioajosd ijio" },
        {
            id: 2,
            name: "shjdiuj ahjsiud aisj ioajsdiojaios sxjckjz jzxhckjzhx hhhh",
        },
    ]);
    const [dataRoy, setDataRoy] = useState([
        { id: 1, name: "aisdhjio spodk sdkos asikdpoajsoi iosjdioajosd ijio" },
        {
            id: 2,
            name: "shjdiuj ahjsiud aisj ioajsdiojaios sxjckjz jzxhckjzhx hhhh",
        },
    ]);
    const [dataTol, setDataTol] = useState([
        { id: 1, name: "aisdhjio spodk sdkos asikdpoajsoi iosjdioajosd ijio" },
        {
            id: 2,
            name: "shjdiuj ahjsiud aisj ioajsdiojaios sxjckjz jzxhckjzhx hhhh",
        },
    ]);
    const [dataTolMal, setDataTolMal] = useState([
        { id: 1, name: "aisdhjio spodk sdkos asikdpoajsoi iosjdioajosd ijio" },
        {
            id: 2,
            name: "shjdiuj ahjsiud aisj ioajsdiojaios sxjckjz jzxhckjzhx hhhh",
        },
    ]);

    const getDataMud = async () => {
        await APIBakalavr.getMud().then((res) => setDataMud(res.data));
    };

    const getDataRoy = async () => {
        await APIBakalavr.getRoy().then((res) => setDataRoy(res.data));
    };

    const getDataTol = async () => {
        await APIBakalavr.getTol().then((res) => setDataTol(res.data));
    };

    const getDataTolMal = async () => {
        await APIBakalavr.getTolMal().then((res) => setDataTolMal(res.data));
    };

    // useEffect(() => {
    //     getDataMud();
    //     getDataRoy();
    //     getDataTol();
    //     getDataTolMal();
    // }, []);

    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] flex flex-col justify-start px-4 sm:px-6">
                <div className="my-8 sm:my-10 lg:my-14 2xl:my-20">
                    <h1 className="text-center text-[26px] sm:text-[28px] 2xl:text-[30px] font-semibold">
                        Bakalavr qabuli haqida
                    </h1>
                </div>
                <div className="">
                    <h1 className="font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        Hujjatlarini topshirish muddatlari:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataMud?.length > 0 ? (
                            dataMud?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                Ma'lumot joylanmagan!
                            </div>
                        )}
                    </ol>
                </div>
                <div className="">
                    <h1 className="font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        Kerak bo'lgan hujjatlar ro'yxati:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataRoy?.length > 0 ? (
                            dataRoy?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                Ma'lumot joylanmagan!
                            </div>
                        )}
                    </ol>
                </div>
                <div className="">
                    <h1 className="font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        To'lov haqida:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataTol?.length > 0 ? (
                            dataTol?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                Ma'lumot joylanmagan!
                            </div>
                        )}
                    </ol>
                </div>
                <div className="mb-6 2xl:mb-8">
                    <h1 className="font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        Rekvizitlar:
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:mt-4 2xl:mt-8">
                        <div className="w-full lg:border-e-[1px] lg:border-black">
                            <h1 className="text-center sm:text-[19px] xl:text-[21px] 2xl:text-[23px] font-medium">UZS <p className="font-normal inline-block">(so'm)</p></h1>
                            <div>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        O'zR Moliya vazirligi g'aznachiligi h/r:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>INN: </b>23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Markaziy bank HKKM Toshkent shahar
                                        boshqarmasi MFO:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Qo'qon davlat pedagogika instituti INN:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>Swift: </b>23402000300100001010
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:hidden border-t-[1px] border-black" />
                        <div className="w-full lg:ms-4">
                            <h1 className="text-center sm:text-[19px] xl:text-[21px] 2xl:text-[23px] font-medium">USD <p className="font-normal inline-block">($)</p></h1>
                            <div>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        O'zR Moliya vazirligi g'aznachiligi h/r:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>INN: </b>23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Markaziy bank HKKM Toshkent shahar
                                        boshqarmasi MFO:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Qo'qon davlat pedagogika instituti INN:{" "}
                                    </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>Swift: </b>23402000300100001010
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        To'liq ma'lumotlarni olish uchun bog'lanish:
                    </h1>
                    <ol className="my-3">
                        {dataTolMal?.length > 0 ? (
                            dataTolMal?.map((item) => (
                                <li
                                    key={item.id}
                                    className="sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item.name}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                Ma'lumot joylanmagan!
                            </div>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Bakalavr;

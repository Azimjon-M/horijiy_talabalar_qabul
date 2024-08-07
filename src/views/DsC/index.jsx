import React, { useContext, useEffect, useState } from "react";
import APIDsC from "../../servises/dsc";
import TextTranslate from "../../components/TextTranslate";
import { TogglerLang } from "../../context/language";

const DsC = () => {
    const { isLang } = useContext(TogglerLang);

    const [dataMud, setDataMud] = useState(null);
    const [dataRoy, setDataRoy] = useState(null);
    const [dataTol, setDataTol] = useState(null);
    const [dataTolMal, setDataTolMal] = useState(null);

    const getDataMud = async () => {
        await APIDsC.getMud().then((res) => setDataMud(res.data));
    };

    const getDataRoy = async () => {
        await APIDsC.getRoy().then((res) => setDataRoy(res.data));
    };

    const getDataTol = async () => {
        await APIDsC.getTol().then((res) => setDataTol(res.data));
    };

    const getDataTolMal = async () => {
        await APIDsC.getTolMal().then((res) => setDataTolMal(res.data));
    };

    useEffect(() => {
        getDataMud();
        getDataRoy();
        getDataTol();
        getDataTolMal();
    }, []);

    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-full sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] flex flex-col justify-start px-4 sm:px-6">
                <div className="my-8 sm:my-10 lg:my-14 2xl:my-20">
                    <h1 className="flex justify-center gap-2 text-center text-[26px] sm:text-[28px] 2xl:text-[30px] font-semibold">
                        <TextTranslate id="qabDsc" />
                    </h1>
                </div>
                <div className="">
                    <h1 className="flex justify-center font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <TextTranslate id="bakTitle_1" />:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataMud?.length > 0 ? (
                            dataMud?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item[`name_${isLang}`]}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                <TextTranslate id="MalumotJoylanmagan" />
                            </div>
                        )}
                    </ol>
                </div>
                <div className="">
                    <h1 className="flex justify-center font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <TextTranslate id="bakTitle_2" />:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataRoy?.length > 0 ? (
                            dataRoy?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item[`name_${isLang}`]}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                <TextTranslate id="MalumotJoylanmagan" />
                            </div>
                        )}
                    </ol>
                </div>
                <div className="">
                    <h1 className="flex justify-center font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <TextTranslate id="bakTitle_3" />:
                    </h1>
                    <ol className="list-decimal mt-3 mb-8">
                        {dataTol?.length > 0 ? (
                            dataTol?.map((item) => (
                                <li
                                    key={item.id}
                                    className="ms-8 sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item[`name_${isLang}`]}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                <TextTranslate id="MalumotJoylanmagan" />
                            </div>
                        )}
                    </ol>
                </div>
                <div className="mb-6 2xl:mb-8">
                    <h1 className="flex justify-center font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <TextTranslate id="bakTitle_4" />:
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:mt-4 2xl:mt-8">
                        <div className="w-full lg:border-e-[1px] lg:border-black">
                            <h1 className="text-center sm:text-[19px] xl:text-[21px] 2xl:text-[23px] font-medium">
                                UZS{" "}
                                <p className="font-normal inline-block">
                                    (so'm)
                                </p>
                            </h1>
                            <div>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>Aloqa bank h/r: </b>
                                    23402000300100001010
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>INN: </b>201122919
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>MFO: </b>00014
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Markaziy bank HKKM Toshkent shahar BB
                                        Sh/x:{" "}
                                    </b>
                                    400910860304057094100350002
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>INN: </b>
                                    200131171
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:hidden border-t-[1px] border-black" />
                        <div className="w-full lg:ms-4">
                            <h1 className="text-center sm:text-[19px] xl:text-[21px] 2xl:text-[23px] font-medium">
                                USD{" "}
                                <p className="font-normal inline-block">($)</p>
                            </h1>
                            <div>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        O'zR Moliya vazirligi g'aznachiligi h/r:{" "}
                                    </b>
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>INN: </b>
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>MFO: </b>
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>
                                        Qo'qon davlat pedagogika instituti INN:{" "}
                                    </b>
                                </p>
                                <p className="sm:text-[17px] xl:text-[18px] 2xl:text-[22px]">
                                    <b>Swift: </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="flex justify-center font-medium text-center sm:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <TextTranslate id="bakTitle_5" />:
                    </h1>
                    <ol className="my-3">
                        {dataTolMal?.length > 0 ? (
                            dataTolMal?.map((item) => (
                                <li
                                    key={item.id}
                                    className="sm:text-[18px] xl:text-[20px] 2xl:text-[22px]"
                                >
                                    {item[`name_${isLang}`]}
                                </li>
                            ))
                        ) : (
                            <div className="text-red-600">
                                <TextTranslate id="MalumotJoylanmagan" />
                            </div>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default DsC;

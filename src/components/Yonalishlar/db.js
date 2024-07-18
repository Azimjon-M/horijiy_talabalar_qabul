const $ = 12600;
const UZSvalueBak = 8600000;
const UZSvalueMag = 9800000;
const currentUSDBak = Math.floor(UZSvalueBak / $);
const currentUSDMag = Math.floor(UZSvalueMag / $);

function formatNumberWithCommas(number) {
    return number
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(\d{3})(?=\d)/g, "$1,")
        .split("")
        .reverse()
        .join("");
}
export const dataBakalavr = [
    {
        id: 1,
        title_id: "homYonalishBak_1",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 2,
        title_id: "homYonalishBak_2",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 3,
        title_id: "homYonalishBak_3",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 4,
        title_id: "homYonalishBak_4",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 5,
        title_id: "homYonalishBak_5",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 6,
        title_id: "homYonalishBak_6",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 7,
        title_id: "homYonalishBak_7",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 8,
        title_id: "homYonalishBak_8",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 9,
        title_id: "homYonalishBak_9",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 10,
        title_id: "homYonalishBak_10",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 11,
        title_id: "homYonalishBak_11",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 12,
        title_id: "homYonalishBak_12",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 13,
        title_id: "homYonalishBak_13",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 14,
        title_id: "homYonalishBak_14",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 15,
        title_id: "homYonalishBak_15",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 16,
        title_id: "homYonalishBak_16",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 17,
        title_id: "homYonalishBak_17",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 18,
        title_id: "homYonalishBak_18",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 19,
        title_id: "homYonalishBak_19",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 20,
        title_id: "homYonalishBak_20",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 21,
        title_id: "homYonalishBak_21",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 22,
        title_id: "homYonalishBak_22",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 23,
        title_id: "homYonalishBak_23",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 24,
        title_id: "homYonalishBak_24",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 25,
        title_id: "homYonalishBak_25",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
    {
        id: 26,
        title_id: "homYonalishBak_26",
        tolovUZS: formatNumberWithCommas(UZSvalueBak),
        tolovUSD: formatNumberWithCommas(currentUSDBak),
    },
];

export const dataMagistr = [
    {
        id: 1,
        title_id: "homYonalishMag_1",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 2,
        title_id: "homYonalishMag_2",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 3,
        title_id: "homYonalishMag_3",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 4,
        title_id: "homYonalishMag_4",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 5,
        title_id: "homYonalishMag_5",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 6,
        title_id: "homYonalishMag_6",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 7,
        title_id: "homYonalishMag_7",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 8,
        title_id: "homYonalishMag_8",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 9,
        title_id: "homYonalishMag_9",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 10,
        title_id: "homYonalishMag_10",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 11,
        title_id: "homYonalishMag_11",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 12,
        title_id: "homYonalishMag_12",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 13,
        title_id: "homYonalishMag_13",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 14,
        title_id: "homYonalishMag_14",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 15,
        title_id: "homYonalishMag_15",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
    {
        id: 16,
        title_id: "homYonalishMag_16",
        tolovUZS: formatNumberWithCommas(UZSvalueMag),
        tolovUSD: formatNumberWithCommas(currentUSDMag),
    },
];

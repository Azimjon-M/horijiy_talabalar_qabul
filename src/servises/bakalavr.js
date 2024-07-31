import axiosInstance from ".";

const epMud = "malumot/bakalavr_mudat/";
const epRoy = "malumot/bakalavr_royhat/";
const epTol = "malumot/bakalavr_tolov/";
const epTolMal = "malumot/bakalavr_toliq_malumot/";

const getMud = () => axiosInstance.get(epMud);
const getRoy = () => axiosInstance.get(epRoy);
const getTol = () => axiosInstance.get(epTol);
const getTolMal = () => axiosInstance.get(epTolMal);

const APIBakalavr = { getMud, getRoy, getTol, getTolMal };

export default APIBakalavr;

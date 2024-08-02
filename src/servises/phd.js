import axiosInstance from ".";

const epMud = "malumot/phd_mudat/";
const epRoy = "malumot/phd_royhat/";
const epTol = "malumot/phd_tolov/";
const epTolMal = "malumot/phd_toliq_malumot/";

const getMud = () => axiosInstance.get(epMud);
const getRoy = () => axiosInstance.get(epRoy);
const getTol = () => axiosInstance.get(epTol);
const getTolMal = () => axiosInstance.get(epTolMal);

const APIPhD = { getMud, getRoy, getTol, getTolMal };

export default APIPhD;

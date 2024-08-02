import axiosInstance from ".";

const epMud = "malumot/dsc_mudat/";
const epRoy = "malumot/dsc_royhat/";
const epTol = "malumot/dsc_tolov/";
const epTolMal = "malumot/dsc_toliq_malumot/";

const getMud = () => axiosInstance.get(epMud);
const getRoy = () => axiosInstance.get(epRoy);
const getTol = () => axiosInstance.get(epTol);
const getTolMal = () => axiosInstance.get(epTolMal);

const APIDsC = { getMud, getRoy, getTol, getTolMal };

export default APIDsC;

import axiosInstance from ".";

const epMud = "malumot/magistr_mudat/";
const epRoy = "malumot/magistr_royhat/";
const epTol = "malumot/magistr_tolov/";
const epTolMal = "malumot/magistr_toliq_malumot/";

const getMud = () => axiosInstance.get(epMud);
const getRoy = () => axiosInstance.get(epRoy);
const getTol = () => axiosInstance.get(epTol);
const getTolMal = () => axiosInstance.get(epTolMal);

const APIMagistr = { getMud, getRoy, getTol, getTolMal };

export default APIMagistr;

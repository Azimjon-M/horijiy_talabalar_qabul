import axiosInstance from ".";

const epMud = "malumot/phd_mudat/";
const epRoy = "malumot/phd_royhat/";
const epTol = "malumot/phd_tolov/";
const epTolMal = "malumot/phd_toliq_malumot/";

const getMud = () => axiosInstance.get(epMud);
const getRoy = () => axiosInstance.get(epRoy);
const getTol = () => axiosInstance.get(epTol);
const getTolMal = () => axiosInstance.get(epTolMal);

const postMud = (item) => axiosInstance.post(epMud, item);
const postRoy = (item) => axiosInstance.post(epRoy, item);
const postTol = (item) => axiosInstance.post(epTol, item);
const postTolMal = (item) => axiosInstance.post(epTolMal, item);

const patchMud = (id, item) => axiosInstance.patch(`${epMud}${id}/`, item);
const patchRoy = (id, item) => axiosInstance.patch(`${epRoy}${id}/`, item);
const patchTol = (id, item) => axiosInstance.patch(`${epTol}${id}/`, item);
const patchTolMal = (id, item) =>
    axiosInstance.patch(`${epTolMal}${id}/`, item);

const delMud = (id) => axiosInstance.delete(`${epMud}${id}/`);
const delRoy = (id) => axiosInstance.delete(`${epRoy}${id}/`);
const delTol = (id) => axiosInstance.delete(`${epTol}${id}/`);
const delTolMal = (id) => axiosInstance.delete(`${epTolMal}${id}/`);

const APIBakalavr = {
    getMud,
    getRoy,
    getTol,
    getTolMal,
    postMud,
    postRoy,
    postTol,
    postTolMal,
    patchMud,
    patchRoy,
    patchTol,
    patchTolMal,
    delMud,
    delRoy,
    delTol,
    delTolMal,
};

export default APIBakalavr;

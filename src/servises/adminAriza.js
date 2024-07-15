import axiosInstance from ".";

const ep = "ariza/ariza/";
const epDel = "ariza/ariza/";

const get = () => axiosInstance.get(ep);
const del = (id) => axiosInstance.delete(`${epDel}${id}/`);

const APIAriza = { get, del };

export default APIAriza;

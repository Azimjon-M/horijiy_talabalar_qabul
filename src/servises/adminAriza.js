import axiosInstance from ".";

const ep = "ariza/ariza/";

const get = () => axiosInstance.get(ep);
const del = (id) => axiosInstance.delete(`${ep}${id}/`);

const APIAriza = { get, del };

export default APIAriza;

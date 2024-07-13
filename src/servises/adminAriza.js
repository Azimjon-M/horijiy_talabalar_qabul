import axiosInstance from ".";

const ep = "ariza/ariza/";

const get = () => axiosInstance.get(ep);

const APIAriza = { get };

export default APIAriza;

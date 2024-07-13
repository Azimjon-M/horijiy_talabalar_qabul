import axiosInstance from ".";

const ep = "ariza/qolanma/";

const get = () => axiosInstance.get(ep);

const post = (item) => axiosInstance.post(ep, item);

const put = (id, item) => axiosInstance.put(ep + id + "/", item);

const APIArizaQollanma = { get, post, put };

export default APIArizaQollanma;

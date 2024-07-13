import axiosInstance from ".";

const ep = "ariza/ariza/";

const post = (item) => axiosInstance.post(ep, item);


const APIPostAriza = { post };

export default APIPostAriza;

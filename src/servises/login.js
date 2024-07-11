import axiosInstanse from "./index";

const ep = "api/token/";

const post = (item) => {
    return axiosInstanse.post(ep, item);
};

const APILogin = { post };

export default APILogin;

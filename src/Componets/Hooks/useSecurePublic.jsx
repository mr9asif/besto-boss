import axios from "axios";

const axiosSecurePublic=axios.create({
    baseURL:'http://localhost:3000',
})
const useSecurePublic = () => {
    return axiosSecurePublic
};

export default useSecurePublic;
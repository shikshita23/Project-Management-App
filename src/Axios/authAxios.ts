import axios from "axios";
import { BASE_URL } from "../Constant/constant";

const access_token=localStorage.getItem("access_token")

const authAxios= axios.create({
    baseURL:BASE_URL,
});
authAxios.interceptors.request.use(function (config){
    config.headers['Authorization']=`Bearee ${access_token}`;
    config.headers['ngrok-skip-browser-warning'] = 'false';
    return config;
}, function(error){
    return Promise.reject(error);
});
 authAxios.interceptors.response.use(function (response){
   if(response.headers['Content-Type']!== 'application/json'){
    throw new Error('Non-Json response');
   }
   return response;
}, function(error){
    return Promise.reject(error);
}
);
export default authAxios;

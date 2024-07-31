import {useMutation} from "react-query";
import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import authAxios from "../../../Axios/authAxios"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostLogin=(onSuccess:any)=>{
    // const navigate= useNavigate();
    const postLogin= async(data: string)=>{
        try{
            const res=await axios.post("https://trout-romantic-broadly.ngrok-free.app/login",data);
            console.log("response==>",res);
            // if (res) {
			// 	localStorage.setItem("access_token", res?.data?.access_token);
			// 	// localStorage.setItem("refresh_token",res?.data?.refresh_token);
			// 	console.log("the token ==>", res.data.access_token);
			// 	navigate("/register");
			// }
            return res.data;
        }
        catch(error){
            console.log("error while fetching");
        }
    };
    const mutation=useMutation(postLogin,{
        onSuccess,
    });
    return{
        mutation
    }
}
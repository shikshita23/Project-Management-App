import {  useQuery } from "react-query";
import authAxios from "../../../Axios/authAxios";
export const useGetProj=()=>{
    const getProj=async ()=>{
        try{
            const res=await authAxios.get(`/projects/show?owner_id=${1}`,{
                headers:{
                    Accept:"application/json",
                },
            });
            console.log("res.data from useGetUsers==>", res.data);
			return res.data;
        }
        catch(error){
            console.log("Error while fetching data:",error)
        }
    };
    const{isLoading,error,data,refetch}=useQuery({
        queryKey:["getProj"],
        queryFn:getProj,
    });
    return{
        isLoading,
        error,
        data,
        refetch,
    };
};
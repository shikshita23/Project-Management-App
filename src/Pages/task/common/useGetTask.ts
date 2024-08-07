import {  useQuery } from "react-query";
import authAxios from "../../../Axios/authAxios";
export const useGetTask=()=>{
    const getTask=async ()=>{
        try{
            const res=await authAxios.get(`/tasks/show?project_id=${2}`,{
                headers:{
                    Accept:"application/json",
                },
            });
            console.log("res.data from useGetTask==>", res.data);
			return res.data;
        }
        catch(error){
            console.log("Error while fetching data:",error)
        }
    };
    const{isLoading,error,data,refetch}=useQuery({
        queryKey:["getTask"],
        queryFn:getTask,
    });
    return{
        isLoading,
        error,
        data,
        refetch,
    };
};
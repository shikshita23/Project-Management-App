import { useMutation } from "react-query";
import authAxios from "../../../Axios/authAxios";
// import axiosNoAuth from "../../axios/axios";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostTask = (onSuccess: any) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const postTask = async (data: any) => {
		console.log("data after creating", data);
		try {
			// const res = await axiosNoAuth.post("/user", data);
			const res = await authAxios.post("/tasks/add", data);
			return res.data;
		} catch (error) {
			console.log("Error fetching data:", error);
		}
	};
	const mutation = useMutation(postTask, {
		onSuccess,
	});
	return {
		mutation,
	};
};

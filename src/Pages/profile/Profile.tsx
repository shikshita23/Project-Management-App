
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProfileSchema";
import InputField from "../../Components/Atoms/Input/InputField";
import { Button } from "antd";
import { useGetUser } from "./common/useGetUser";
// import { useMutation } from "react-query";
// import authAxios from "../../Axios/authAxios";

type userForm={
  username:string;
  email:string;
  password:string;
}
const Profile = () => {
   const{control,handleSubmit}=useForm<userForm>({
    defaultValues:{

    },
    resolver:yupResolver(schema)
   })
   
   const onSubmit=async()=>{
    console.log("hello")
    // updateUser.mutate(data);
   }
   const { data, error, isLoading } = useGetUser();
   console.log("data from get user",data)
   
   if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errors</div>;
  return (
    <>
    <div className="bg-white rounded-[10px] flex h-[112px] ps-[20px]">
      <div className="rounded-full p-[27px] bg-red-200 my-[10px]">
      <FontAwesomeIcon icon={faUser} className="w-[40px] h-[40px]" />
      </div>
      <div className="flex flex-col items-center ms-5 font-bold">
       <div className="name text-3xl mt-[30px]">{data.username}</div>
       <div className="email mt-[10px]">{data.email}</div>
      </div>
    </div>
    <div className="rounded-[10px] bg-white mt-[10px] p-[20px]">
      <div className="title">Information</div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[50px]">
        <div className="flex">
        <div className=" input-field-div items-center justify-between   p-[0.5rem] mt-[65px] relative">
          <label className="inline project-label w-[8rem]">Email</label>
          <InputField
            control={control}
            name="email"
            type="email"
            size="large" 
            placeholder=""
            defaultValue={data.email}
            className="mt-5 inputFields border-0 border-b-2   rounded-none focus:placeholder-transparent w-[350px]"   
            disabled ={true}       
          />
        </div>
        </div>
        <br/>
        <div className="flex">
        <div className=" input-field-div items-center justify-between   p-[0.5rem] mt-[65px] relative">
          <label className="inline project-label w-[8rem]">User Name:</label>
          <InputField
            control={control}
            name="username"
            placeholder=""
            type="text"
            size="large" 
             defaultValue={data.username}
            className="mt-5 inputFields border-0 border-b-2 rounded-none focus:placeholder-transparent w-[350px]"         />
        </div>
        </div>
        <br/>
      </div>
      <div className="flex justify-center">
        <Button htmlType="submit" className='px-9 font-medium me-7 my-10 '>Update</Button>
      </div>
      </form>
    </div>
     
    </>
  )
}

export default Profile;
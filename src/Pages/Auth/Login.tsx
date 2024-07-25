import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { MailOutlined, LockFilled } from "@ant-design/icons";
import { Input, Checkbox, Button, Card,theme } from "antd";
import type { CheckboxProps } from "antd";
import { schema } from "./LoginSchema";
import "../../Theme/Css/Login.css";
import AuthLeft from "../../assets/Images/AuthLeft.png";
import AuthRight from "../../assets/Images/AuthRight.png";
type formValues={
    email:string,
    password:string
}
export default function Login() {
	// const {token} = theme.useToken();
	const onChange: CheckboxProps["onChange"] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const {
		register,
		//  control,
		handleSubmit,
		formState: { errors },
	} = useForm<formValues>({
        defaultValues:{
            email:"",
            password:""
        },
        resolver:yupResolver(schema),
    });
	const onError = () => {
		console.log("Error while logging");
	};
	const onSubmit = (data:formValues) => {
		console.log("done",data); // Replace with your form submission logic
	};
	return (
		<>
			<Card  style={{ width: 390 ,backgroundColor:"white", margin: '42px auto 0'}}>
				<div  style={{ fontFamily: "'Anton', sans-serif",}} className=" relative bottom-14 p-5 rounded-md text-white text-xl bg-[#172b4d]">
					Sign In
				</div>
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className="flex flex-col"
					
				>
					{/* <div className="mainDiv flex flex-col justify-center w-[380px]"> */}
					<div className="email mb-4">
						<Input
							size="large"
							placeholder="default size"
							type="email"
							prefix={<MailOutlined />}
							{...register("email")}
						/>
						<div> {errors.email?.message}</div>
					</div>
					<div className="password mb-4">
						<Input.Password
							size="large"
							placeholder="input password"
							type="password"
							prefix={<LockFilled />}
							{...register("password")}
						/>
						<div>{errors.password && <div>{errors.password.message}</div>}</div>
					</div>
					<Checkbox onChange={onChange} className="mb-4">Remember me</Checkbox>
					<Button 
					style={{backgroundColor:"#172b4d", color:"white"}}
					htmlType="submit">Login</Button>
				
				</form>
			<div className=" flex justify-between mt-12">
				<div>
					Forgot password?
				</div>
				<div>
					Create new account
				</div>
			</div>
			</Card>
			<div className="flex justify-between h-[212px]">
				<img src={AuthLeft} alt="image to left" width="300" height="200" className="relative bottom-10"/>
				<img src={AuthRight} alt="image to right"width="300" height="200" className="relative bottom-10"/>
				
			</div>
		</>
	);
}



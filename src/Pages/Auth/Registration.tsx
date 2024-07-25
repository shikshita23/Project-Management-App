import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { MailOutlined, LockFilled } from "@ant-design/icons";
import { Input, Checkbox, Button, Card } from "antd";
import type { CheckboxProps } from "antd";
import { schema } from "./LoginSchema";

type formValues={
    email:string,
    password:string
}
export default function Login() {
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
			<Card style={{ width: 390 }} className="p-4">
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className="flex flex-col"
				>
					{/* <div className="mainDiv flex flex-col justify-center w-[380px]"> */}
					<div className="email mb-4">
						<Input
							placeholder="default size"
							type="email"
							prefix={<MailOutlined />}
							{...register("email")}
						/>
						<div> {errors.email?.message}</div>
					</div>
					<div className="password mb-4">
						<Input.Password
							placeholder="input password"
							type="password"
							prefix={<LockFilled />}
							{...register("password")}
						/>
						<div>{errors.password && <div>{errors.password.message}</div>}</div>
					</div>
					<Checkbox onChange={onChange} className="mb-4">Remember me</Checkbox>
					{/* <Button type="primary">Login</Button> */}
                    <button type="submit">LOGIN NEW</button>
					{/* </div> */}
				</form>
			</Card>
		</>
	);
}



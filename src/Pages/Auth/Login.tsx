import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutlined, LockFilled } from "@ant-design/icons";
import { Checkbox, Button, Card } from "antd";
import type { CheckboxProps } from "antd";
import InputField from "../../Components/Atoms/Input/InputField";
import PasswordInput from "../../Components/Atoms/Input/PasswordInput";
import { schema } from "./LoginSchema";
import "../../Theme/Css/Login.css";

import { useEffect } from "react";

type formValues = {
	email: string;
	password: string;
};
export default function Login() {
	const onChange: CheckboxProps["onChange"] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<formValues>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: formValues) => {
		console.log("done", data); 
	};

	useEffect(() => {
		const subscription = watch((value, { name, type }) =>
			console.log(value, name, type)
		);
		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<>
			<Card
				style={{
					width: 390,
					backgroundColor: "white",
					margin: "100px auto 0",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
				}}
			>
				<div
					style={{ fontFamily: "'Anton', sans-serif" }}
					className=" relative bottom-14 p-5 rounded-md text-white text-xl bg-[#172b4d]"
				>
					Sign In
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<div className="email mb-4">
						{/* <Controller
							control={control}
							name="ReactDatepicker"
							{...register("email")}
							render={({ field }) => ( */}
								<InputField
									errors={errors.email?.message}
									size="large"
									type="email"
									placeholder="Enter your email"
									prefix={<MailOutlined />}
									control={control}
									name={'email'}
								/>
							{/* )} */}
						{/* /> */}
					</div>
					<div className="password mb-4">
						{/* <Controller
							control={control}
							{...register("password")}
							render={({ field }) => ( */}
								<PasswordInput
									errors={errors.password?.message}
									size="large"
									placeholder="Enter your password"
									prefix={<LockFilled />}
									control={control}
									name={'password'}
								/>
							{/* )}
						/> */}
					</div>
					<Checkbox onChange={onChange} className="mb-4">
						Remember me
					</Checkbox>
					<Button
						style={{ backgroundColor: "#172b4d", color: "white" }}
						htmlType="submit"
					>
						Login
					</Button>
				</form>
				<div className=" flex justify-between mt-12">
					<div>Forgot password?</div>
					<div>Create new account</div>
				</div>
			</Card>
		</>
	);
}
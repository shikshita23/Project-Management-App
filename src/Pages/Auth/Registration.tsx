import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailOutlined, LockFilled,UserOutlined } from "@ant-design/icons";
import { Checkbox, Button, Card } from "antd";
import type { CheckboxProps } from "antd";

import InputField from "../../Components/Atoms/Input/InputField";
import PasswordInput from "../../Components/Atoms/Input/PasswordInput";
import { schema } from "./LoginSchema";
import "../../Theme/Css/Login.css";

import { useEffect } from "react";

type formValues = {
	username: string;
	email: string;
	password: string;
};
export default function Login() {
	const onChange: CheckboxProps["onChange"] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	const {
		register,
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
					REGISTRATION
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<div className="username mb-4">
						<Controller
							control={control}
							name="ReactDatepicker"
							{...register("username")}
							render={({ field }) => (
								<InputField
									field={field}
									error={errors.email?.message}
									size="large"
									type="text"
									placeholder="Enter your Username"
									prefix={<UserOutlined />}
								/>
							)}
						/>
					</div>
					<div className="email mb-4">
						<Controller
							control={control}
							name="ReactDatepicker"
							{...register("email")}
							render={({ field }) => (
								<InputField
									field={field}
									error={errors.email?.message}
									size="large"
									type="email"
									placeholder="Enter your email"
									prefix={<MailOutlined />}
								/>
							)}
						/>
					</div>
					<div className="password mb-4">
						<Controller
							control={control}
							name="ReactDatepicker"
							{...register("password")}
							render={({ field }) => (
								<PasswordInput
									field={field}
									error={errors.password?.message}
									size="large"
									placeholder="Enter your password"
									prefix={<LockFilled />}
								/>
							)}
						/>
					</div>
					<Checkbox onChange={onChange} className="mb-4">
					I agree the Terms and Conditions
					</Checkbox>
					<Button
						style={{ backgroundColor: "#172b4d", color: "white", marginTop:"25px"}}
						htmlType="submit"
					>
						Create Account
					</Button>
					<div className="mt-5">
						Already have an account? Sign in
					</div>
				</form>
			</Card>
		</>
	);
}

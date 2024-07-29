import React from "react";
import { Input } from "antd";
import { Controller } from 'react-hook-form';
import { SizeType } from "antd/es/config-provider/SizeContext";

interface InputProps{
    errors?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // field:ControllerRenderProps <any>;
    size?:SizeType;
    placeholder?: string; 
    prefix?: React.ReactNode;
    type:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:any;
    name: string;
}
const InputField:React.FC<InputProps> = (
    {
        // field,
        control,
        errors,
        size = 'default',
        placeholder = 'Enter', 
        prefix,
        type="text",
        name
    }
)=>(<div className="email mb-4">
  {!control&&(

    <Input
      // {...field}
      control={control}
      size={size}
      placeholder={placeholder}
      type={type}
      prefix={prefix}
      className="ps-2"
    />
  )}
  {control&&(

    <Controller
      // {...field}
      name={name}
      control={control}
      render={({field})=>{
        return(
          <Input
          {...field}
          size={size}
          placeholder={placeholder}
          type={type}
          prefix={prefix}
          className="ps-2"
          />
        )
      }}
    />
  )}

    {errors && <p className="text-[red]">{errors}</p>}
  </div>

);
export default InputField;
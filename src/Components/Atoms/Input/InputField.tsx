import React from "react";
import { Input } from "antd";
import { ControllerRenderProps } from 'react-hook-form';

interface InputProps{
    error?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field:ControllerRenderProps <any>;
    size?:'large' | 'default' | 'small';
    placeholder?: string; 
    prefix?: React.ReactNode;
    type:string;
}
const InputField:React.FC<InputProps>=(
    {
        field,
        error,
        size = 'default',
        placeholder = 'Enter', 
        prefix,
        type="text" 
    }
)=>(<div className="email mb-4">
    <Input
      {...field}
      size={size}
      placeholder={placeholder}
      type={type}
      prefix={prefix}
      className="ps-2"
    />
    {error && <p className="text-[red]">{error}</p>}
  </div>

);
export default InputField;
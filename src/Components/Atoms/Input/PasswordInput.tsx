import React from "react";
import { Input } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { ControllerRenderProps } from 'react-hook-form';

interface PasswordInputProps{
    error?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field:ControllerRenderProps <any, 'password'>;
    size?:'large' | 'default' | 'small';
    placeholder?: string; 
    prefix?: React.ReactNode;
}
const PasswordInput:React.FC<PasswordInputProps>=(
    {
        field,
        error,
        size = 'default',
        placeholder = '********', 
        prefix = <MailOutlined />, 
    }
)=>(<div className="email mb-4">
    <Input.Password
      {...field}
      size={size}
      placeholder={placeholder}
      type="password"
      prefix={prefix}
      className="ps-2"
    />
    {error && <p className="text-[red]">{error}</p>}
  </div>

);
export default PasswordInput;
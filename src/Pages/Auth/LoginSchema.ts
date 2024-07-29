
import * as yup from "yup";
export const schema= yup.object({
    email:yup
    .string()
    .email("invalid email")
    .required("email is required"),

    username:yup
    .string()
    .required("username is required")
    .min(2),
    
    password:yup.string()
    .required("password is required")
    .min(8)
    
})
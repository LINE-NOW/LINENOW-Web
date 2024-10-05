import { ValidateConfig } from "@hooks/useForm";

export interface LoginFormValues {
  phonenumber: string;
  password: string;
}

export const initialLoginValues: LoginFormValues = {
  phonenumber: "",
  password: "",
};

const loginValidateConfig: Record<keyof LoginFormValues, ValidateConfig> = {
  phonenumber: {
    regex: /^[0-9]+$/,
    minLength: 10,
    maxLength: 11,
  },
  password: {
    regex: /^[a-zA-Z0-9!@#$%^&*]+$/,
    minLength: 4,
    maxLength: 100,
  },
};

export default loginValidateConfig;

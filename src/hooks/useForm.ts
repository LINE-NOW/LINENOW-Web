import { useEffect, useState } from "react";

interface useFormProps<T extends Record<string, any>> {
  initialValues: T;
  checkValidate: (values: T) => { [key in keyof T]?: string };
}

export interface ValidateConfig<T> {
  name: keyof T;
  regex?: RegExp;
  regexError?: string;
  minLength: number;
  maxLength?: number;
  lengthError: string;
}

export const checkBaseValidate = <T>(
  config: ValidateConfig<T>,
  value: string
): string | undefined => {
  if (value.length === 0) {
    return undefined;
  }
  if (
    value.length < config.minLength ||
    (config.maxLength && value.length > config.maxLength)
  ) {
    return config.lengthError;
  }
  if (config.regex && !config.regex.test(value)) {
    return config.regexError;
  }
  return undefined;
};

function useForm<T extends Record<string, any>>({
  initialValues,
  checkValidate,
}: useFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    setErrors(checkValidate(values));
    const isCurrentValid =
      Object.values(values).every((value) => value != "") &&
      Object.values(errors).every((value) => value == undefined);
    setIsValid(isCurrentValid);
  }, [values]);

  useEffect(() => {
    console.log("isValid:", isValid);
  }, [isValid]);

  return {
    values,
    errors,
    isValid,
    handleChange,
  };
}

export default useForm;

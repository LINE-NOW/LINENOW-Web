import { FormData } from "@interfaces/form";
import { useEffect, useState } from "react";

interface useFormProps<T extends FormData> {
  initialValues: T;
  checkValidate: (values: T) => { [key in keyof T]?: string };
}

function useForm<T extends FormData>({
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

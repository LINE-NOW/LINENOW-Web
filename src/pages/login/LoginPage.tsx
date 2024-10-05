import * as S from "./LoginPage.styled";
import InputText from "@components/inputText/InputText";
import useForm, { checkBaseValidate } from "@hooks/useForm";
import Button from "@components/button/Button";

import signupValidateConfig, {
  initialLoginValues,
  LoginFormValues,
} from "./LoginValidateConfig";

const LoginPage = () => {
  const checkValidate = (values: LoginFormValues) => {
    const errors: Partial<Record<keyof LoginFormValues, string>> = {};

    (Object.keys(signupValidateConfig) as Array<keyof LoginFormValues>).forEach(
      (key) => {
        const config = signupValidateConfig[key];
        const value = values[key];
        const error = checkBaseValidate(config, value);
        if (error) {
          errors[key] = error;
        }
      }
    );

    return errors;
  };

  const handleSubmitButton = () => {
    console.log("Form Submitted", values);
  };

  const { values, errors, isValid, handleChange } = useForm<LoginFormValues>({
    initialValues: initialLoginValues,
    checkValidate,
  });

  return (
    <S.LoginPageWrapper>
      <S.LoginPageTextInputWrapper>
        <InputText
          name="phonenumber"
          label="전화번호"
          pattern={signupValidateConfig.phonenumber.regex.source}
          placeholder="01012345678"
          onChange={handleChange}
          value={values.phonenumber}
          errorMessage={errors.phonenumber}
        />
        <InputText
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          pattern={signupValidateConfig.password.regex.source}
          onChange={handleChange}
          value={values.password}
          errorMessage={errors.password}
        />
      </S.LoginPageTextInputWrapper>
      <Button disabled={!isValid} onClick={handleSubmitButton}>
        로그인 하기
      </Button>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;

import * as S from "./LoginPage.styled";
import InputText from "@components/inputText/InputText";
import useForm from "@hooks/useForm";
import Button from "@components/button/Button";

import {
  initialLoginValues,
  LoginFormValues,
  loginValidateConfigs,
} from "./LoginValidateConfig";
import validateConfigs from "@utils/validateConfig";

const LoginPage = () => {
  const getErrors = (values: LoginFormValues) => {
    const errors = validateConfigs(loginValidateConfigs, values);
    return errors;
  };

  const handleSubmitButton = () => {
    console.log("Form Submitted", values);
  };

  const { values, errors, isValid, handleChange } = useForm<LoginFormValues>({
    initialValues: initialLoginValues,
    getErrors,
  });

  return (
    <S.LoginPageWrapper>
      <S.LoginPageTextInputWrapper>
        <InputText
          name="phonenumber"
          label="전화번호"
          pattern={loginValidateConfigs.phonenumber.regex.source}
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
          pattern={loginValidateConfigs.password.regex.source}
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

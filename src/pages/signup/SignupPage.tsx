import BottomButton from "@components/bottomButton/BottomButton";
import * as S from "./SignupPage.styled";
import InputText from "@components/inputText/InputText";
import useForm, { checkBaseValidate } from "@hooks/useForm";
import Button from "@components/button/Button";
import { useState } from "react";
import signupValidateConfig, {
  initialSignupValues,
  SignupFormValues,
} from "./SignupValidateConfig";

const SignupPage = () => {
  const [isVerificationCodeAble, setIsVerificationCodeAble] = useState<
    boolean | null
  >(null);

  const [isVerificationCodeChecked, setIsVerificationCodeChecked] =
    useState<boolean>(false);

  const checkValidate = (values: SignupFormValues) => {
    const errors: Partial<Record<keyof SignupFormValues, string>> = {};

    (
      Object.keys(signupValidateConfig) as Array<keyof SignupFormValues>
    ).forEach((key) => {
      const config = signupValidateConfig[key];
      const value = values[key];
      const error = checkBaseValidate(config, value);
      if (error) {
        errors[key] = error;
      }
    });

    if (isVerificationCodeAble == null) {
    } else if (!isVerificationCodeAble) {
      errors.phonenumber = "인증번호 발급에 실패했습니다.\n다시 시도해주세요.";
    } else {
      if (isVerificationCodeChecked) {
        errors.confirmPassword =
          "인증번호가 일치하지 않습니다.\n정확하게 작성해주세요.";
      }
    }

    // 비밀번호 확인 추가 검증
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    return errors;
  };

  const handleSubmitButton = () => {
    console.log("Form Submitted", values);
  };

  const { values, errors, isValid, handleChange } = useForm<SignupFormValues>({
    initialValues: initialSignupValues,
    checkValidate,
  });

  const getVerificationCode = () => {
    // TODO: - API 연결 필요
    const confirmation = window.confirm("인증코드 확인 하시겠습니까?");
    if (confirmation) {
      alert("인증코드 발송 성공");
      setIsVerificationCodeAble(true);
    } else {
      alert("인증코드 발송 실패");
      setIsVerificationCodeAble(false);
    }
  };

  const checkVerificationCode = () => {
    const confirmation = window.confirm("인증코드 확인 하시겠습니까?");
    if (confirmation) {
      alert("인증코드 확인 성공");
      setIsVerificationCodeChecked(true);
    } else {
      alert("인증코드 확인 실패");
      setIsVerificationCodeChecked(false);
    }
  };

  return (
    <>
      <S.SignupPageWrapper>
        <InputText
          name="name"
          label="이름"
          placeholder="홍길동"
          pattern={signupValidateConfig.name.regex.source}
          onChange={handleChange}
          value={values.name}
          currentCount={values.name.length}
          count={20}
          errorMessage={errors.name}
        />

        <S.SignupPageTextInputWrapper>
          <InputText
            name="phonenumber"
            label="전화번호"
            pattern={signupValidateConfig.phonenumber.regex.source}
            disabled={isVerificationCodeAble || false}
            description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
            원활한 소통을 위해 신중하게 입력해주세요.`}
            placeholder="01012345678"
            onChange={handleChange}
            value={values.phonenumber}
            button={{
              disabled:
                isVerificationCodeAble ||
                false ||
                errors.phonenumber != undefined,
              children: "인증번호 받기",
              scheme: "blueLight",
              onClick: getVerificationCode,
            }}
            errorMessage={errors.phonenumber}
          />
          <InputText
            name="verificationCode"
            placeholder="인증번호를 입력해주세요"
            pattern={signupValidateConfig.verificationCode.regex.source}
            disabled={!isVerificationCodeAble || isVerificationCodeChecked}
            onChange={handleChange}
            value={values.verificationCode}
            errorMessage={errors.verificationCode}
            button={{
              disabled:
                !isVerificationCodeAble ||
                isVerificationCodeChecked ||
                errors.verificationCode != undefined,
              children: "인증번호 확인",
              scheme: "blueLight",
              onClick: checkVerificationCode,
            }}
          />
        </S.SignupPageTextInputWrapper>

        <S.SignupPageTextInputWrapper>
          <InputText
            name="password"
            type="password"
            label="비밀번호"
            description="4자 이상의 영문과 숫자를 조합해주세요."
            placeholder="비밀번호를 입력해주세요"
            pattern={signupValidateConfig.password.regex.source}
            onChange={handleChange}
            value={values.password}
            errorMessage={errors.password}
          />
          <InputText
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 재입력해주세요"
            pattern={signupValidateConfig.confirmPassword.regex.source}
            onChange={handleChange}
            value={values.confirmPassword}
            errorMessage={errors.confirmPassword}
          />
        </S.SignupPageTextInputWrapper>
      </S.SignupPageWrapper>
      <BottomButton>
        <Button disabled={!isValid} onClick={handleSubmitButton}>
          회원 가입하기
        </Button>
      </BottomButton>
    </>
  );
};
export default SignupPage;

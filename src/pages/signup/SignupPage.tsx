import BottomButton from "@components/bottomButton/BottomButton";
import * as S from "./SignupPage.styled";
import InputText from "@components/inputText/InputText";
import useForm from "@hooks/useForm";
import Button from "@components/button/Button";
import { useState } from "react";

import {
  initialSignupValues,
  SignupFormValues,
  signupValidateConfigs,
} from "./SignupValidateConfig";
import validateConfigs from "@utils/validateConfig";

const SignupPage = () => {
  const [isVerificationCodeAble, setIsVerificationCodeAble] = useState<
    boolean | null
  >(null);
  const [isVerificationCodeChecked, setIsVerificationCodeChecked] = useState<
    boolean | null
  >(null);

  const getErrors = (values: SignupFormValues) => {
    const errors = validateConfigs(signupValidateConfigs, values);

    // 전화번호 인증 추가 검증
    if (isVerificationCodeAble == false) {
      errors.phonenumber = "인증번호 발급에 실패했습니다.\n다시 시도해주세요.";
    } else if (
      isVerificationCodeAble == true &&
      isVerificationCodeChecked == false
    ) {
      errors.verificationCode =
        "인증번호가 일치하지 않습니다.\n정확하게 작성해주세요.";
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
    getErrors,
  });

  const getVerificationCode = () => {
    if (values.phonenumber.length < 10 || values.phonenumber.length > 11) {
      alert("전화번호를 제대로 입력해주세요!");
      return;
    }
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
    if (values.verificationCode.length != 5) {
      alert("전화번호를 제대로 입력해주세요!");
      return;
    }

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
          regex={signupValidateConfigs.name.regex}
          minLength={signupValidateConfigs.name.minLength}
          maxLength={signupValidateConfigs.name.maxLength}
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
            regex={signupValidateConfigs.phonenumber.regex}
            minLength={signupValidateConfigs.phonenumber.minLength}
            maxLength={signupValidateConfigs.phonenumber.maxLength}
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
            regex={signupValidateConfigs.verificationCode.regex}
            minLength={signupValidateConfigs.verificationCode.minLength}
            maxLength={signupValidateConfigs.verificationCode.maxLength}
            disabled={
              !isVerificationCodeAble || isVerificationCodeChecked || false
            }
            onChange={handleChange}
            value={values.verificationCode}
            errorMessage={errors.verificationCode}
            button={{
              disabled:
                !isVerificationCodeAble || isVerificationCodeChecked || false,
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
            description={`4자 이상의 영문과 숫자, 특수문자 (!@#$%^&*)를\n조합하여 비밀번호를 작성해주세요.`}
            placeholder="비밀번호를 입력해주세요"
            regex={signupValidateConfigs.password.regex}
            minLength={signupValidateConfigs.password.minLength}
            maxLength={signupValidateConfigs.password.maxLength}
            onChange={handleChange}
            value={values.password}
            errorMessage={errors.password}
          />
          <InputText
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 재입력해주세요"
            regex={signupValidateConfigs.password.regex}
            minLength={signupValidateConfigs.password.minLength}
            maxLength={signupValidateConfigs.password.maxLength}
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

import BottomButton from "@components/bottomButton/BottomButton";
import * as S from "./SignupPage.styled";
import InputText from "@components/inputText/InputText";

const SignupPage = () => {
  return (
    <>
      <S.SignupPageWrapper>
        <InputText
          label="이름"
          placeholder="홍길동"
          currentCount={0}
          count={20}
        />

        <S.SignupPageTextInputWrapper>
          <InputText
            label="전화번호"
            description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
            원활한 소통을 위해 신중하게 입력해주세요.`}
            placeholder="010-2383-4346"
            button={{ children: "인증번호받기", scheme: "blueLight" }}
          />
          <InputText placeholder="인증번호를 입력해주세요" disabled />
        </S.SignupPageTextInputWrapper>

        <S.SignupPageTextInputWrapper>
          <InputText
            label="비밀번호"
            description="4자 이상의 영문과 숫자를 조합해주세요."
            placeholder="비밀번호를 입력해주세요"
          />
          <InputText placeholder="비밀번호를 재입력해주세요" />
        </S.SignupPageTextInputWrapper>
      </S.SignupPageWrapper>
      <BottomButton />
    </>
  );
};
export default SignupPage;

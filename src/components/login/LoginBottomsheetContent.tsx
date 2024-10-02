import { IconButton } from "@components/button/CustomButton";
import * as S from "./LoginBottomsheetContent.styled";
import { useNavigate } from "react-router-dom";

const LoginBottomsheetContent = () => {
  const navigate = useNavigate();

  return (
    <S.LoginBottomsheetContentWrapper>
      <S.LoginBottomsheetContentTopWrapper>
        <S.LoginBottomsheetContentTopTitle>
          로그인이 필요해요
        </S.LoginBottomsheetContentTopTitle>
        <S.LoginBottomsheetContentTopSubTitle>
          라인나우에 바로 가입하여 대기 줄 서기를 이용하세요 <br /> 카카오톡으로
          간편하게 가입할 수 있어요
        </S.LoginBottomsheetContentTopSubTitle>
      </S.LoginBottomsheetContentTopWrapper>

      <S.LoginBottomsheetContentButton
        onClick={() => {
          navigate("/signup");
        }}
      >
        <IconButton icon="kakao_kakao" iconSize="1.5rem" />
        <S.LoginBottomsheetContentButtonText>
          카카오 로그인으로 시작하기
        </S.LoginBottomsheetContentButtonText>
      </S.LoginBottomsheetContentButton>
    </S.LoginBottomsheetContentWrapper>
  );
};

export default LoginBottomsheetContent;

import { IconButton } from "@components/button/CustomButton";
import * as S from "./LoginBottomsheetContent.styled";
import { useNavigate } from "react-router-dom";
import Button from "@components/button/Button";
import IconLabel from "@components/label/IconLabel";

const LoginBottomsheetContent = () => {
  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate("/signup");
  };

  return (
    <S.LoginBottomsheetContentWrapper>
      <S.LoginBottomsheetContentTopWrapper>
        <S.LoginBottomsheetContentTopTitle>
          로그인이 필요해요
        </S.LoginBottomsheetContentTopTitle>
        <S.LoginBottomsheetContentTopSubTitle>
          라인나우에 바로 가입하여 대기 줄 서기를 이용하세요 <br />
          카카오톡으로 간편하게 가입할 수 있어요
        </S.LoginBottomsheetContentTopSubTitle>
      </S.LoginBottomsheetContentTopWrapper>

      <Button
        onClick={handleLoginButton}
        style={{ backgroundColor: "#FEE500", color: "#000000" }}
      >
        <IconLabel gap={"0.5rem"} icon={"kakao_kakao"} iconSize={"1.5rem"}>
          카카오 로그인으로 시작하기
        </IconLabel>
      </Button>
    </S.LoginBottomsheetContentWrapper>
  );
};

export default LoginBottomsheetContent;

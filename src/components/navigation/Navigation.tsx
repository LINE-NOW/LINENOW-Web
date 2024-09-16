import { useLocation } from "react-router-dom";

import * as S from "./Navigation.styled";
import { IconButton } from "@components/button/CustomButton";

const Navigation = () => {
  const location = useLocation();

  const getNavigationTitle = () => {
    switch (location.pathname) {
      case "/my-waiting":
        return <S.NavigationLabel>나의 줄서기</S.NavigationLabel>;
      case "/setting":
        return <S.NavigationLabel>설정</S.NavigationLabel>;
      default:
        return null;
    }
  };

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <S.NavigationWrapper>
      <IconButton
        onClick={handleBackButton}
        icon="left_gray"
        iconSize="1.5rem"
      />
      {getNavigationTitle()}
    </S.NavigationWrapper>
  );
};

export default Navigation;

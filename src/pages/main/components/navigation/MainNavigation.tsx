import * as S from "./MainNavigation.styled";

//component
import WaitingCard from "@components/waitingCard/WaitingCard";

const MainNavigation = () => {
  return (
    <S.MainNavigationWrapper>
      <h1>나의 대기</h1>
      <WaitingCard />
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

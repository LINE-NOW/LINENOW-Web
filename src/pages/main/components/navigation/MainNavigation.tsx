import IconLabel from "@components/label/IconLabel";
import * as S from "./MainNavigation.styled";

//component
import WaitingCard from "@components/waitingCard/WaitingCard";
import { IconButton } from "@components/button/CustomButton";

const MainNavigation = () => {
  return (
    <S.MainNavigationWrapper>
      <S.MainNavigationTitleWrapper>
        <IconLabel
          iconPosition="right"
          gap="0.25rem"
          icon="right_white"
          iconSize="1rem"
        >
          <S.MainNavigationTitleLabel>
            <p>나의 대기</p>
            <p className="lime">3개</p>
          </S.MainNavigationTitleLabel>
        </IconLabel>

        <IconButton icon="setting_white" iconSize="1.5rem" />
      </S.MainNavigationTitleWrapper>

      <WaitingCard />
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

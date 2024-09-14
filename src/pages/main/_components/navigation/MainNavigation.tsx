import * as S from "./MainNavigation.styled";

//component
import IconLabel from "@components/label/IconLabel";
import { IconButton } from "@components/button/CustomButton";
import WaitingCard from "@components/waitingCard/WaitingCard";

// comstant
import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";

interface MainNavigationProps {
  isFold: boolean;
}

const MainNavigation = ({ isFold }: MainNavigationProps) => {
  return (
    <S.MainNavigationWrapper
      style={{
        height: `${
          isFold ? MAIN_NAVIGATION_HEIGHT.fold : MAIN_NAVIGATION_HEIGHT.unfold
        }`,
        paddingBottom: `${isFold ? "1rem" : "1.5rem"}`,
      }}
    >
      <S.MainNavigationTitleWrapper>
        <IconLabel
          iconPosition="right"
          gap="0.25rem"
          icon="right_white"
          iconSize="1rem"
        >
          <S.MainNavigationTitleLabel className={isFold ? "fold" : "unfold"}>
            <p>나의 대기</p>
            <p className="lime">3개</p>
          </S.MainNavigationTitleLabel>
        </IconLabel>

        <IconButton icon="setting_white" iconSize="1.5rem" />
      </S.MainNavigationTitleWrapper>
      {isFold ? null : <WaitingCard />}
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

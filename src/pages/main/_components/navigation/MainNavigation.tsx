import * as S from "./MainNavigation.styled";

//component
import IconLabel from "@components/label/IconLabel";
import {
  IconLabelLinkButton,
  IconLinkButton,
} from "@components/button/CustomButton";
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
        <IconLabelLinkButton
          to="my-waiting"
          iconPosition="right"
          gap="0.25rem"
          icon="right_white"
          iconSize="1rem"
        >
          <S.MainNavigationTitleLabel className={isFold ? "fold" : "unfold"}>
            <span>나의 대기</span>
            <span className="lime">3개</span>
          </S.MainNavigationTitleLabel>
        </IconLabelLinkButton>

        <IconLinkButton to="/setting" icon="setting_white" iconSize="1.5rem" />
      </S.MainNavigationTitleWrapper>
      {isFold ? null : <WaitingCard />}
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

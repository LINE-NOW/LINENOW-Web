import * as S from "./MainNavigation.styled";

//component
import {
  IconLabelLinkButton,
  IconLinkButton,
} from "@components/button/CustomButton";
import WaitingCard from "@components/waitingCard/WaitingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

// constant
import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";

// dummy
import { dummyWaitingsResponse } from "@apis/dummy/dummyWaitingsResponse";

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

      {isFold ? null : (
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          style={{ width: "100%", overflow: "visible" }}
        >
          {dummyWaitingsResponse.map((item, index) => (
            <SwiperSlide>
              <WaitingCard
                key={index}
                waitingID={item.waitingID}
                waitingCount={item.waitingCount}
                booth={item.booth}
                partySize={item.partySize}
                waitingStatus={item.waitingStatus}
                targetTime={item.readyToConfirmAt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

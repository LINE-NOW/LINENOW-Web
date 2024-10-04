import { useEffect, useState } from "react";

//component
import * as S from "./MainNavigation.styled";
import {
  IconLabelLinkButton,
  IconLinkButton,
} from "@components/button/CustomButton";

import WaitingCard from "@components/waitingCard/WaitingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

//type
import { Waiting } from "@interfaces/waiting";

// constant
import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";

// hooks
import { useGetNowWaitings } from "@hooks/apis/waiting";
import useAuth from "@hooks/useAuth";
import WaitingCardLogin from "@components/waitingCard/WaitingCardLogin";

interface MainNavigationProps {
  isFold: boolean;
}

const MainNavigation = ({ isFold }: MainNavigationProps) => {
  const { isLoggedIn } = useAuth();
  const { data, isLoading, isError } = useGetNowWaitings();
  const [waitings, setWaitings] = useState<Waiting[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      setWaitings(data || []);
    }
  }, [isLoading, isError, data]);

  const WaitingList = () => {
    return (
      <Swiper
        spaceBetween={8}
        slidesPerView={1}
        style={{ width: "100%", overflow: "visible" }}
      >
        {waitings.map((item, index) => (
          <SwiperSlide key={index}>
            <WaitingCard key={index} waiting={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

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
        {isLoggedIn ? (
          <>
            <IconLabelLinkButton
              to="my-waiting"
              iconPosition="right"
              gap="0.25rem"
              icon="right_white"
              iconSize="1rem"
            >
              <S.MainNavigationTitleLabel
                className={isFold ? "fold" : "unfold"}
              >
                <span>나의 대기</span>
                <span className="lime">3개</span>
              </S.MainNavigationTitleLabel>
            </IconLabelLinkButton>

            <IconLinkButton
              to="/setting"
              icon="setting_white"
              iconSize="1.5rem"
            />
          </>
        ) : (
          <img src="/images/image_vertical_logo.svg" />
        )}
      </S.MainNavigationTitleWrapper>

      {isFold ? null : isLoggedIn ? WaitingList() : <WaitingCardLogin />}
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;

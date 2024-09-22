import * as S from "./BoothDeatilCard.styled";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { dummyBoothDetailResponse } from "@apis/dummy/dummyBoothDetailResponse"; // dummy 데이터 임포트

interface BoothDetailCardProps {
  activeIndex: number;
}

export const BoothDetailCard = ({}: BoothDetailCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <S.BoothDetailCardWrapper>
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        style={{
          width: "100%",
        }}
      >
        {dummyBoothDetailResponse.map((booth, _) => (
          <SwiperSlide key={booth.boothID}>
            <S.BoothDetailCardThumbnail src={booth.images[0].image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.BoothDetailCardIndicatorWrapper>
        {dummyBoothDetailResponse.map((_, index) => (
          <S.BoothDetailCardIndicator
            key={index}
            $active={index === currentIndex}
          />
        ))}
      </S.BoothDetailCardIndicatorWrapper>
    </S.BoothDetailCardWrapper>
  );
};

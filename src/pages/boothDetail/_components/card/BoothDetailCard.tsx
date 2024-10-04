import { Booth } from "@apis/domains/booth/_interfaces";
import * as S from "./BoothDeatilCard.styled";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailCard = ({ booth }: BoothDetailContentProps) => {
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
        {booth.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <S.BoothDetailCardThumbnail
              src={image.image}
              alt={`Booth image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.BoothDetailCardIndicatorWrapper>
        {booth.images?.map((_, index) => (
          <S.BoothDetailCardIndicator
            key={index}
            $active={index === currentIndex}
          />
        ))}
      </S.BoothDetailCardIndicatorWrapper>
    </S.BoothDetailCardWrapper>
  );
};

import * as S from "./BoothDeatilCard.styled";

interface BoothDetailCardProps {
  boothID: string;
  activeIndex: number;
}

export const BoothDetailCard = ({
  boothID,
  activeIndex,
}: BoothDetailCardProps) => {
  return (
    <S.BoothDetailCardWrapper>
      <S.BoothDetailCardThumbnail
        src={`/images/image_thumbnail_${boothID}.png`}
      />
      <S.BoothDetailCardIndicatorWrapper>
        {[0, 1, 2, 3].map((index) => (
          <S.BoothDetailCardIndicator
            key={index}
            $active={index === activeIndex}
          />
        ))}
      </S.BoothDetailCardIndicatorWrapper>
    </S.BoothDetailCardWrapper>
  );
};

// component
import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import Chip from "@components/chip/Chip";
import Button from "@components/button/Button";

// hook

const WaitingCard = () => {
  return (
    <S.WaitingCardWrapper>
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>내 앞으로 3팀남았어요</S.WaitingCardTitleLabel>
        <Chip scheme="grayLight" shape="outline">
          취소하기
        </Chip>
      </S.WaitingCardTitleWrapper>
      <S.BoothInformationWrapper>
        <S.BoothInformationImage />
        <S.BoothInformaitonLabelWrapper>
          <S.BoothInformationNameLabel>
            <span>8명</span>
            <span>·</span>
            <span>부스 -A</span>
          </S.BoothInformationNameLabel>

          <IconLabel icon="location_gray_light" iconSize="1rem" gap="0.12rem">
            <S.BoothInformationPositionLabel>
              멋쟁이 사자처럼
            </S.BoothInformationPositionLabel>
          </IconLabel>
        </S.BoothInformaitonLabelWrapper>
      </S.BoothInformationWrapper>

      <S.WaitingCardButtonWrapper>
        <Button disabled>순서까지 기다려주세요</Button>
      </S.WaitingCardButtonWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

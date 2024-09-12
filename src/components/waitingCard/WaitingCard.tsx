import IconLabel from "@components/label/IconLabel";
import * as S from "./WaitinCard.styled";
import Button from "@components/button/Button";

const WaitingCard = () => {
  return (
    <S.WaitingCardWrapper>
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>내 앞으로 3팀남았어요</S.WaitingCardTitleLabel>
        <button>취소 버튼</button>
      </S.WaitingCardTitleWrapper>
      <S.BoothInformationWrapper>
        <S.BoothInformationImage />
        <S.BoothInformaitonLabelWrapper>
          <S.BoothInformationNameLabel>
            <span>8명</span>
            <span>·</span>
            <span>부스 -A</span>
          </S.BoothInformationNameLabel>

          <IconLabel icon="position-lightgray" iconSize="1rem" gap="0.12rem">
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

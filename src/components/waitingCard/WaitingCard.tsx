// component
import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import Button from "@components/button/Button";
import { ChipButton } from "@components/button/CustomButton";

// hook

const WaitingCard = () => {
  const handleOnClickCancelButton = () => {
    alert("취소하시겠습니까?");
  };
  return (
    <S.WaitingCardWrapper to="/waiting/1">
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>
          내 앞으로 3팀 남았어요
        </S.WaitingCardTitleLabel>
        <ChipButton
          onClick={handleOnClickCancelButton}
          scheme="grayLight"
          shape="outline"
        >
          취소하기
        </ChipButton>
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

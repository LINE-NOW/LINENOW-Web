import IconLabel from "@components/label/IconLabel";
import * as S from "./BoothCard.styled";
import Chip from "@components/chip/Chip";

const BoothCard = () => {
  return (
    <S.BoothCardWrapper>
      <S.BoothCardInformationWrapper>
        <S.BoothCardInformationImage />
        <S.BoothCardInformationLabelWrapper>
          <S.BoothCardInformationNameLabel>
            부스 A
          </S.BoothCardInformationNameLabel>

          <S.BoothCardInformationDescriptionLabel>
            예시 부스입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사
            우리 나라 만세~
          </S.BoothCardInformationDescriptionLabel>

          <IconLabel
            gap={"0.13rem"}
            icon={"location_gray_light"}
            iconSize={"1rem"}
          >
            <S.BoothCardInformationLocationLabel>
              동국대 팔정도
            </S.BoothCardInformationLocationLabel>
          </IconLabel>
        </S.BoothCardInformationLabelWrapper>
      </S.BoothCardInformationWrapper>

      <S.BoothCardChipListWrapper>
        <Chip scheme="lime">대기중</Chip>
        <Chip scheme="blueLight">대기 12 팀</Chip>
      </S.BoothCardChipListWrapper>
    </S.BoothCardWrapper>
  );
};

export default BoothCard;

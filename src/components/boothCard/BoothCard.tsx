import IconLabel from "@components/label/IconLabel";
import * as S from "./BoothCard.styled";
import { BOOTH_TITLE, BOOTH_SUMMARY } from "@constants/booth";

export type BoothCardType = "list" | "detail";

interface BoothCardProps {
  type?: BoothCardType;
  chip?: React.ReactNode;
  borderBottom?: string;
  padding?: string;
  to?: string;
}

const BoothCard = ({
  type = "list",
  chip,
  borderBottom,
  padding,
  to,
}: BoothCardProps) => {
  return (
    <S.BoothCardWrapper
      type={type}
      to={to || "#"}
      $borderBottom={borderBottom}
      padding={padding}
    >
      <S.BoothCardInformationWrapper>
        <S.BoothCardInformationImage />
        <S.BoothCardInformationLabelWrapper>
          <S.BoothCardInformationNameLabel>
            <span>{BOOTH_TITLE}</span>
          </S.BoothCardInformationNameLabel>

          <S.BoothCardInformationDescriptionLabel>
            {BOOTH_SUMMARY}
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

      {chip && <S.BoothCardChipListWrapper>{chip}</S.BoothCardChipListWrapper>}
    </S.BoothCardWrapper>
  );
};

export default BoothCard;

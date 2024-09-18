import * as S from "./BoothDetailContent.styled";
import IconLabel from "@components/label/IconLabel";

interface BoothDetailContentProps {
  boothTitle: string;
  boothSummary: string;
  boothLocationInfo: string;
}

export const BoothDetailContent = ({
  boothTitle,
  boothSummary,
  boothLocationInfo,
}: BoothDetailContentProps) => {
  return (
    <S.BoothDetailContentWrapper>
      <S.BoothDetailContentTitle>{boothTitle}</S.BoothDetailContentTitle>
      <S.BoothDetailContentSummary>{boothSummary}</S.BoothDetailContentSummary>
      <IconLabel gap={"0.13rem"} icon={"location_gray_light"} iconSize={"1rem"}>
        <S.BoothDetailContentLocationInfo>
          {boothLocationInfo}
        </S.BoothDetailContentLocationInfo>
      </IconLabel>
    </S.BoothDetailContentWrapper>
  );
};

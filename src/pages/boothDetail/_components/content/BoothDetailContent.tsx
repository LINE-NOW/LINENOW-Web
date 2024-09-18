import * as S from "./BoothDetailContent.styled";

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
      <S.BoothDetailContentLocationWrapper>
        <S.BoothDetailContentLocationIcon
          src={"/icons/icon_location_gray_light.svg"}
        />
        <S.BoothDetailContentLocationInfo>
          {boothLocationInfo}
        </S.BoothDetailContentLocationInfo>
      </S.BoothDetailContentLocationWrapper>
    </S.BoothDetailContentWrapper>
  );
};

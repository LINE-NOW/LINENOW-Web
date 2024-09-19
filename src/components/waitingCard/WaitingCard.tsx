// component
import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import { ChipButton } from "@components/button/CustomButton";

// hook
import { useWaitingCard } from "./_hooks/useWaitingCard";
import { Booth } from "./interfaces/WaitingCard";
import { WaitingSatus } from "@types/status";

interface WaitingCardProps {
  waitingID: number;
  waitingCount?: number;
  booth: Booth;
  partySize: number;

  waitingStatus: WaitingSatus;
  targetTime?: string;
}

const WaitingCard = ({
  waitingID,
  waitingCount,
  booth,
  partySize,
  waitingStatus,
  targetTime,
}: WaitingCardProps) => {
  const handleOnClickCancelButton = () => {
    alert(`${waitingID}를 취소하시겠습니까?`);
  };

  const { titleContent, button, isValidate } = useWaitingCard({
    status: waitingStatus,
    waitingCount: waitingCount,
    targetTime: targetTime,
  });

  return (
    <S.WaitingCardWrapper to={`/waiting/${waitingID}`}>
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>{titleContent}</S.WaitingCardTitleLabel>
        {isValidate ? (
          <ChipButton
            onClick={handleOnClickCancelButton}
            scheme="grayLight"
            shape="outline"
          >
            취소하기
          </ChipButton>
        ) : null}
      </S.WaitingCardTitleWrapper>

      <S.BoothInformationWrapper>
        <S.BoothInformationImage />
        <S.BoothInformaitonLabelWrapper>
          <S.BoothInformationNameLabel>
            <span>{partySize}명</span>
            <span>·</span>
            <span>{booth.name}</span>
          </S.BoothInformationNameLabel>

          <IconLabel icon="location_gray_light" iconSize="1rem" gap="0.12rem">
            <S.BoothInformationPositionLabel>
              {booth.location}
            </S.BoothInformationPositionLabel>
          </IconLabel>
        </S.BoothInformaitonLabelWrapper>
      </S.BoothInformationWrapper>

      <S.WaitingCardButtonWrapper>{button}</S.WaitingCardButtonWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import { ChipButton } from "@components/button/CustomButton";

// interfaces
import { Waiting } from "@interfaces/waiting";

// hooks
import { useWaitingCard } from "./_hooks/useWaitingCard";

interface WaitingCardProps
  extends Pick<
    Waiting,
    "waitingID" | "waitingCount" | "booth" | "partySize" | "waitingStatus"
  > {
  targetTime?: string;
  isBottomButton: boolean;
}

const WaitingCard = ({
  waitingID,
  waitingCount,
  booth,
  partySize,
  waitingStatus,
  targetTime,
  isButton = true,
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
      {/* 상단 타이틀 */}
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

      <S.WaitingCardContentWrapper>
        {/* 부스 정보 */}
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

        {/* 추가 엑션 버튼 */}
        {isButton ? button : null}
      </S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

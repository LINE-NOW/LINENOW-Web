import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import { ChipButton } from "@components/button/CustomButton";

// interfaces
import { Waiting } from "@interfaces/waiting";

// hooks
import { useWaitingCard } from "./_hooks/useWaitingCard";
import { useNavigate } from "react-router-dom";
import useModal from "@hooks/useModal";

interface WaitingCardProps {
  waiting: Pick<
    Waiting,
    "waitingID" | "waitingCount" | "booth" | "partySize" | "waitingStatus"
  >;
  targetTime?: string;
  isButton?: boolean;
}

const WaitingCard = ({ waiting, targetTime }: WaitingCardProps) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const cancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const handleCancelButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal(cancelModal);
  };

  const handleWaitingCard = () => {
    navigate(`/waiting/${waiting.waitingID}`);
  };

  const { titleContent, button, isValidate } = useWaitingCard({
    status: waiting.waitingStatus,
    waitingCount: waiting.waitingCount,
    targetTime: targetTime,
  });

  return (
    <S.WaitingCardWrapper onClick={handleWaitingCard}>
      {/* 상단 타이틀 */}
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>{titleContent}</S.WaitingCardTitleLabel>
        {isValidate ? (
          <ChipButton
            onClick={handleCancelButton}
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
              <span>{waiting.partySize}명</span>
              <span>·</span>
              <span>{waiting.booth.name}</span>
            </S.BoothInformationNameLabel>

            <IconLabel icon="location_gray_light" iconSize="1rem" gap="0.12rem">
              <S.BoothInformationPositionLabel>
                {waiting.booth.location}
              </S.BoothInformationPositionLabel>
            </IconLabel>
          </S.BoothInformaitonLabelWrapper>
        </S.BoothInformationWrapper>

        {/* 추가 엑션 버튼 */}
        {button}
      </S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

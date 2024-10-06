import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import { ChipButton } from "@components/button/CustomButton";

// interfaces
import { Waiting } from "@interfaces/waiting";

// hooks
import { useWaitingCard } from "./_hooks/useWaitingCard";
import { useNavigate } from "react-router-dom";
import useModal from "@hooks/useModal";
import { postWaitingCancel } from "@apis/domains/waitingCancel/apis";

interface WaitingCardProps {
  waiting: Pick<
    Waiting,
    | "waitingID"
    | "waitingTeamsAhead"
    | "booth"
    | "party_size"
    | "waitingStatus"
    | "confirmRemainingTime"
    | "arrivalRemainingTime"
  >;
  isButton?: boolean;
  disableClick?: boolean;
}

const WaitingCard = ({ waiting, disableClick = false }: WaitingCardProps) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const targetTime = () => {
    switch (waiting.waitingStatus) {
      case "ready_to_confirm":
        return waiting.confirmRemainingTime;
      case "confirmed":
        return waiting.arrivalRemainingTime;
      default:
        return null;
    }
  };

  const cancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
      onClick: async () => {
        closeModal();
        try {
          if (waiting.waitingID !== undefined) {
            await postWaitingCancel({ waitingID: waiting.waitingID });
            navigate("/", { replace: true });
          } else {
            alert("대기 ID를 찾을 수 없습니다.");
          }
        } catch (error) {
          alert("대기 취소 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
      },
    },

    secondButton: {
      children: "이전으로",
    },
  };

  const handleCancelButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal(cancelModal);
  };

  const handleWaitingCard = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disableClick) {
      navigate(`/waiting/${waiting.waitingID}`, {
        state: waiting.waitingID,
      });
    } else {
      event.stopPropagation();
    }
  };

  const { titleContent, button, isValidate } = useWaitingCard({
    status: waiting.waitingStatus ? waiting.waitingStatus : "check",
    waitingCount: waiting.waitingTeamsAhead,
    targetTime: targetTime() || "",
  });

  return (
    <S.WaitingCardWrapper onClick={handleWaitingCard}>
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
        <S.BoothInformationWrapper>
          <S.BoothInformationImage
            src={waiting.booth?.thumbnail || "/images/default_thumbnail.png"}
          />
          <S.BoothInformaitonLabelWrapper>
            <S.BoothInformationNameLabel>
              <span>{waiting.party_size || 0}명</span>
              <span>·</span>
              <span>{waiting.booth?.name || "부스명 없음"}</span>
            </S.BoothInformationNameLabel>

            <IconLabel icon="location_gray_light" iconSize="1rem" gap="0.12rem">
              <S.BoothInformationPositionLabel>
                {waiting.booth?.location || "위치 없음"}
              </S.BoothInformationPositionLabel>
            </IconLabel>
          </S.BoothInformaitonLabelWrapper>
        </S.BoothInformationWrapper>

        {button}
      </S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

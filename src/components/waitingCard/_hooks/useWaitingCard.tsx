import { ReactNode } from "react";

// components
import Button from "@components/button/Button";

//types
import { WaitingStatus } from "@linenow-types/status";

//hooks
import useCountdown from "@hooks/useCountdown";
import useModal from "@hooks/useModal";

interface WaitingCardProps {
  status: WaitingStatus;
  waitingCount?: number;
  targetTime?: string;
}

interface WaitingCardConfig {
  titleContent: ReactNode;
  button?: ReactNode;
  isValidate: boolean;
}

export const useWaitingCard = ({
  status,
  waitingCount,
  targetTime,
}: WaitingCardProps) => {
  const { getTime } = useCountdown({
    targetDate: targetTime || "1970-01-01T00:00:00.000Z",
  });

  const { openModal } = useModal();

  const confirmModal = {
    title: "다른 대기가 취소돼요",
    sub: "입장을 확정하면 다른 대기는 취소돼요.\n 입장을 확정하시겠어요?",
    primaryButton: {
      scheme: "lime",
      children: "입장 확정하기",
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const handleConfirmButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal(confirmModal);
  };

  const waitingCardConfig: Record<WaitingStatus, WaitingCardConfig> = {
    check: {
      titleContent: (
        <>
          내 앞으로 <span className="blue">{waitingCount}팀</span> 남았어요
        </>
      ),
      isValidate: false,
    },
    // waiting: - 대기 중임
    waiting: {
      titleContent: (
        <>
          내 앞으로 <span className="blue">{waitingCount}팀</span> 남았어요
        </>
      ),
      button: (
        <Button disabled>
          <span>순서까지 기다려주세요</span>
        </Button>
      ),
      isValidate: true,
    },

    // readyToConfirm: - 입장 확정을 받기 위한 3분의 기다림
    ready_to_confirm: {
      titleContent: (
        <>
          <span className="blue">입장</span>하실 수 있어요!
        </>
      ),
      button: (
        <Button scheme="lime" onClick={handleConfirmButton}>
          <span>입장 확정하기</span>
          <span>{getTime("MMSS")}</span>
        </Button>
      ),
      isValidate: true,
    },

    // confirmed: - 입장 확정 후, 부스 입장을 위한 10분의 기다림
    confirmed: {
      titleContent: (
        <>
          <span className="blue">입장</span>하실 수 있어요!
        </>
      ),
      button: (
        <Button scheme="limeLight">
          <span>시간 내에 입장 해주세요</span>
          <span>{getTime("MMSS")}</span>
        </Button>
      ),
      isValidate: true,
    },

    // arrived: 부스에 입장을 완료함
    arrived: {
      titleContent: <>입장 완료를 축하해요</>,

      isValidate: false,
    },

    // canceled: - 대기가 취소됨
    canceled: {
      titleContent: <>대기가 취소 됐어요</>,
      isValidate: false,
    },
  };

  return waitingCardConfig[status];
};

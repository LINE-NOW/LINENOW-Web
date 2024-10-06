import { useNavigate } from "react-router-dom";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import BoothCardDetail from "@components/boothCard/boothCardDetail";
import * as S from "./Entrance.styled";
import {
  handleConfirmEntry,
  handleCancelEntry,
  getThreeMinutesLater,
} from "./entranceUtils";
import useEntranceBottomsheet from "@hooks/useEntrance";
// import useTimer from "@hooks/useTimer";
import { getWaitingDetail } from "@apis/domains/waitingDetail/apis";
import { useEffect, useState } from "react";
import { WaitingDetail } from "@interfaces/waitingDetail";
import useModal from "@hooks/useModal";
import useCountdown from "@hooks/useCountdown";

export interface EntranceProps {
  boothID?: number;
  isOpen?: boolean;
  nextPath: string;
}

export const Entrance = ({ boothID, nextPath }: EntranceProps) => {
  const navigate = useNavigate();
  const { closeEntrace } = useEntranceBottomsheet();
  const { openModal, closeModal } = useModal();

  //   const { minutes, seconds } = useTimer(3, 0);
  const [waitingDetail, setWaitingDetail] = useState<WaitingDetail | null>(
    null
  );

  useEffect(() => {
    const fetchWaitingDetail = async () => {
      if (boothID) {
        const detail = await getWaitingDetail({ waitingID: boothID });
        setWaitingDetail(detail);
      }
    };

    fetchWaitingDetail();
  }, [boothID]);

  //추후 확인 후 삭제 예정
  // const targetDate = ;

  // targetDate를 useCountdown 훅에 전달
  const { getTime, isCountdownOver } = useCountdown({
    targetDate: getThreeMinutesLater(),
  });

  return (
    <S.EntranceWrapper>
      <S.EntranceContentWrapper>
        <S.EntranceTextWrapper>
          <S.EntranceTitle>입장 의사를 확정해주세요!</S.EntranceTitle>
          <S.EntranceDescription>
            3분 내로 응답하지 않으면 입장은 취소돼요. <br />
            입장 의사를 밝혀주세요.
          </S.EntranceDescription>
        </S.EntranceTextWrapper>
        <S.EntranceBoothCardWrapper>
          {waitingDetail ? (
            <BoothCardDetail waitingDetail={waitingDetail} />
          ) : (
            <span>대기 정보가 없습니다.</span>
          )}
        </S.EntranceBoothCardWrapper>
      </S.EntranceContentWrapper>

      <ButtonLayout $col={1}>
        <Button
          scheme="lime"
          disabled={isCountdownOver} // 타이머 종료 시 버튼 비활성화
          onClick={() =>
            handleConfirmEntry(
              openModal,
              closeModal,
              closeEntrace,
              navigate,
              nextPath
            )
          }
        >
          <span>입장할게요!</span>
          <span>{getTime("MMSS")}</span>
        </Button>
        <Button
          scheme="grayLight"
          disabled={false}
          shape="outline"
          onClick={() => handleCancelEntry(openModal, closeModal, closeEntrace)}
        >
          <span>입장 취소하기</span>
        </Button>
      </ButtonLayout>
    </S.EntranceWrapper>
  );
};

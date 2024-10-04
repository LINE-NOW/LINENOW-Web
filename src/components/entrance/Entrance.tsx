import { useNavigate } from "react-router-dom";
import useModal from "@hooks/useModal";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import BoothCardDetail from "@components/boothCard/boothCardDetail";
import * as S from "./Entrance.styled";
import useEntranceBottomsheet from "@hooks/useEntrance";
import useTimer from "@hooks/useTimer";
// import { useAtom } from "jotai";
// import { entranceBottomsheetAtom } from "@atoms/entrance";
export interface EntranceProps {
  boothID?: number;
  isOpen?: boolean;
  nextPath: string;
}
// const navigate = useNavigate();

export const Entrance = ({ boothID, nextPath }: EntranceProps) => {
  const navigate = useNavigate();
  const { closeEntrace } = useEntranceBottomsheet();
  const { openModal, closeModal } = useModal();
  const { minutes, seconds } = useTimer(3, 0);
  // const [entranceState] = useAtom(entranceBottomsheetAtom);

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
          <BoothCardDetail waitingCount={boothID ? boothID : 100} />
        </S.EntranceBoothCardWrapper>
      </S.EntranceContentWrapper>

      <ButtonLayout $col={1}>
        <Button
          scheme="lime"
          disabled={false}
          onClick={() =>
            openModal({
              title: "다른 대기가 취소돼요",
              sub: "입장을 확정하면 다른 대기는 취소돼요.\n입장을 확정하시겠어요?",
              secondButton: {
                children: "이전으로",
                onClick: () => closeModal(),
              },
              primaryButton: {
                children: "입장 확정하기",
                scheme: "lime",
                onClick: () => {
                  closeModal();
                  navigate(
                    `${nextPath.startsWith("/") ? nextPath : `/${nextPath}`}`
                  );
                  // jotai 체크 확인
                },
              },
            })
          }
        >
          <span>입장할게요!</span>
          <span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </Button>
        <Button
          scheme="grayLight"
          disabled={false}
          shape="outline"
          onClick={() =>
            openModal({
              title: "정말 입장을 취소하시겠어요?",
              sub: "입장을 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
              secondButton: {
                children: "이전으로",
                onClick: () => closeModal(),
              },
              primaryButton: {
                children: "입장 취소하기",
                onClick: () => {
                  closeModal();
                  closeEntrace();
                },
              },
            })
          }
        >
          <span>입장 취소하기</span>
        </Button>
      </ButtonLayout>
    </S.EntranceWrapper>
  );
};

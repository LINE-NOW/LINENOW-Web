import { BrowserRouter } from "react-router-dom";
import useModal from "@hooks/useModal";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import BoothCard from "@components/boothCard/BoothCard";
import * as S from "./Entrance.styled";
import useBottomsheet from "@hooks/useBottomsheet";

export interface EntranceProps {
  boothID: string;
}
// const navigate = useNavigate();

export const Entrance = ({ boothID }: EntranceProps) => {
  const { closeBottomsheet } = useBottomsheet();
  const { openModal, closeModal } = useModal();
  // useNavigate 훅을 사용하여 경로 이동 제어

  return (
    <BrowserRouter>
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
            <BoothCard type="detail" padding="1rem" to="/" />
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
                    // navigate("/");
                    window.location.href = `/waiting/${boothID}`;
                    // 입장 확정 후 이동 경로 설정
                  },
                },
              })
            }
          >
            <span>입장할게요!</span>
            <span>3:00</span>
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
                    closeBottomsheet();
                  },
                },
              })
            }
          >
            <span>입장 취소하기</span>
          </Button>
        </ButtonLayout>
      </S.EntranceWrapper>
    </BrowserRouter>
  );
};

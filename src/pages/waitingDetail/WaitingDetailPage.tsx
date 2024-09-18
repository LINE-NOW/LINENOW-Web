import * as S from "./WaitingDetailPage.styled";
import BoothCard from "@components/boothCard/BoothCard";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";
import useModal from "@hooks/useModal";

const WaitingDetailPage = () => {
  const { openModal } = useModal();

  const waitingCancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const onWaitingCancelClick = () => {
    openModal(waitingCancelModal);
  };

  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCard type="detail" />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton informationTitle="전체 줄" informationSub="123팀">
        <Button scheme="blueLight">
          <span>내 앞으로 지금</span>
          <span>123팀</span>
        </Button>
        <S.WaitingDetailCancel>
          <span onClick={onWaitingCancelClick}>대기 취소하기</span>
        </S.WaitingDetailCancel>
      </BottomButton>
    </>
  );
};

export default WaitingDetailPage;

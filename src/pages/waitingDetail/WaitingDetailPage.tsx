import { useLocation, useNavigate } from "react-router-dom";
import { useGetWaitingDetail } from "@hooks/apis/waitingDetail";
import * as S from "./WaitingDetailPage.styled";
import BoothCardDetail from "@components/boothCard/boothCardDetail";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";
import useModal from "@hooks/useModal";
import Spinner from "@components/spinner/Spinner";
import { postWaitingCancel } from "@apis/domains/waitingCancel/apis";

const WaitingDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const waitingData = location.state;
  const waitingID = waitingData ? waitingData.id : null;

  // 대기 상세 정보 가져오기
  const { data: waitingDetail, isLoading } = useGetWaitingDetail(
    waitingID || 0
  );

  const { openModal, closeModal } = useModal();

  const waitingCancelModal = {
    title: "정말 대기를 취소하시겠어요?",
    sub: "대기를 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    primaryButton: {
      children: "줄 서기 취소하기",
      onClick: async () => {
        closeModal();
        try {
          await postWaitingCancel({ waitingID });
          navigate("/");
        } catch (error) {
          alert("대기 취소 중 문제가 발생했습니다. 다시 시도해주세요.");
        }
      },
    },
    secondButton: {
      children: "이전으로",
    },
  };

  const onWaitingCancelClick = () => {
    openModal(waitingCancelModal);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!waitingDetail) {
    return <div>대기 상세 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCardDetail waitingDetail={waitingDetail} />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton
        informationTitle="전체 대기"
        informationSub={`${waitingDetail?.total_waiting_teams || 0}팀`}
      >
        <Button scheme="blueLight">
          <span>내 앞으로 지금</span>
          <span>{waitingDetail?.waiting_teams_ahead || 0}팀</span>
        </Button>
        <S.WaitingDetailCancel>
          <span onClick={onWaitingCancelClick}>대기 취소하기</span>
        </S.WaitingDetailCancel>
      </BottomButton>
    </>
  );
};

export default WaitingDetailPage;

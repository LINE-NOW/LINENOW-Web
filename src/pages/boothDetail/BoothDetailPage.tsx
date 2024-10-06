import { useParams } from "react-router-dom";
import { useState } from "react";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import { useGetBooth } from "@hooks/apis/booth";
import Spinner from "@components/spinner/Spinner";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
  BoothDetailMenu,
} from "./_components";
import WaitingCheckModal from "@pages/waitingCheck/_components/WaitingCheckModal";
import useAuth from "@hooks/useAuth";
import useBottomsheet from "@hooks/useBottomsheet";
import LoginBottomsheetContent from "@components/login/LoginBottomsheetContent";

const BoothDetailPage = () => {
  const { isLogin } = useAuth();
  const { openBottomsheet } = useBottomsheet();
  const handleLoginButtonClick = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };
  const { boothId } = useParams<{ boothId: string }>();

  const boothNumber = boothId ? parseInt(boothId, 10) : null;

  const { data: booth, isLoading } = useGetBooth(boothNumber || 0);

  // TODO:- 이거 누군가는 고쳐주세요... atom쓰는걸로...
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getInformationTitle = () => {
    switch (booth?.is_operated) {
      case "not_started":
        return "부스 운영 시간";
      case "operating" || "paused":
        return "전체 대기";
      case "finished":
        return "부스가 종료되었어요";
    }
  };

  const getInformationSub = () => {
    switch (booth?.is_operated) {
      case "not_started":
        return new Date(booth.open_time).toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        });
      case "operating" || "paused":
        //TODO: - API 수정시 total teams 로 바꿔야함
        return `${booth.waiting_count}팀`;

      case "finished":
        return undefined;
    }
  };

  const getInformationButton = () => {
    if (booth?.is_waiting) {
      return (
        <>
          {/* TODO: - 대기 취소 버튼 */}
          <Button scheme="blueLight">
            <span>내 앞으로 지금</span>
            <span className="blue">{booth.waiting_count}팀</span>
          </Button>
        </>
      );
    }
    switch (booth?.is_operated) {
      case "not_started":
        return (
          <Button disabled>
            <span>부스 운영 전이에요.</span>
          </Button>
        );
      case "operating":
        return (
          <Button onClick={openModal}>
            <span>대기 줄 서기</span>
          </Button>
        );
      case "paused":
        return (
          <Button disabled>
            <span>대기 줄 서기가 중지 되었어요</span>
          </Button>
        );
      case "finished":
        return undefined;
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {booth && (
        <>
          <BoothDetailCard booth={booth} />
          <BoothDetailContent booth={booth} />
          <Separator />
          <BoothDetailNotice booth={booth} />
          <BoothDetailMenu booth={booth} />

          <BottomButton
            informationTitle={getInformationTitle()}
            informationSub={getInformationSub()}
          >
            {isLogin ? (
              getInformationButton()
            ) : (
              // 로그인 하지 않은 경우
              <Button scheme="lime" onClick={handleLoginButtonClick}>
                <span>로그인하고 이용하기</span>
              </Button>
            )}

            {isModalOpen && (
              <WaitingCheckModal booth={booth} onClose={closeModal} />
            )}
          </BottomButton>
          {isModalOpen && (
            <WaitingCheckModal booth={booth} onClose={closeModal} />
          )}
        </>
      )}
    </>
  );
};

export default BoothDetailPage;

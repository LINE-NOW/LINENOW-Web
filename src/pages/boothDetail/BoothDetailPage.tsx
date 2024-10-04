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
            informationTitle="전체 줄"
            informationSub={`${booth.waiting_count}팀`}
          >
            {isLogin ? (
              <Button onClick={openModal}>
                <span>대기 줄 서기</span>
              </Button>
            ) : (
              <Button scheme="lime" onClick={handleLoginButtonClick}>
                <span>로그인하고 이용하기</span>
              </Button>
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

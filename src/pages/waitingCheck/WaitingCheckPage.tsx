import { useState } from "react";
import * as S from "./WaitingCheckPage.styled";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingDetailCaution from "@pages/waitingDetail/_components/WaitingDetailCaution";
import WaitingCheckCautionModal from "./_components/WaitingCheckCautionModal";

const WaitingCheckPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const waitingID = useWaitingId();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingCheckPageTitle>
          줄서기를 진행하시겠어요?
        </S.WaitingCheckPageTitle>
        <WaitingCard
          //TODO: - api 연결 후 삭제 필요
          waiting={{
            waitingID: 1,
            waitingStatus: "check",
            waitingTeamsAhead: 3,
            booth: {
              name: "라인나우",
              boothID: 1,
              location: "동국대학교",
              thumbnail: "/images/image_thumbnail_1.png",
            },

            partySize: 3,
          }}
          isButton={false}
        />
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton>
        <Button scheme="blue" onClick={handleOpenModal}>
          <span>계속 진행하기</span>
        </Button>
      </BottomButton>

      {isModalOpen && <WaitingCheckCautionModal onClose={handleCloseModal} />}
    </>
  );
};

export default WaitingCheckPage;

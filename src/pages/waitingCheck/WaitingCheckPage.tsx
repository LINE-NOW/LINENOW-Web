import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { checkedPeople, booth } = location.state || {};

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
          waiting={{
            waitingStatus: "check",
            waitingTeamsAhead: booth.waiting_count,
            booth: {
              name: booth.name,
              boothID: booth.id,
              location: booth.location,
              thumbnail: booth.images[0] || "/images/default_thumbnail.png",
            },

            partySize: checkedPeople,
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

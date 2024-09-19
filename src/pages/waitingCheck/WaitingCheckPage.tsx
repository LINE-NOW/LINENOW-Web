import { useState } from "react";
import * as S from "./WaitingCheckPage.styled";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingDetailCaution from "@pages/waitingDetail/_components/WaitingDetailCaution";
import WaitingCheckCautionModal from "./_components/WaitingCheckCautionModal";
// import useWaitingId from "./_hooks/useWaitingId";

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
        {/* {waitingID ? ( */}
        <WaitingCard
          type="check"
          // waitingID={waitingID}
          remainingTeams={3}
          boothInfo={{
            peopleCount: 8,
            boothName: "부스 - A",
            location: "멋쟁이 사자처럼",
          }}
        />
        {/* ) : (
          ""
        )} */}
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

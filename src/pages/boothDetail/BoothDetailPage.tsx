import { useState } from "react";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
// import useBoothID from "./_hooks/useBoothID";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
  BoothDetailMenu,
} from "./_components";
import {
  BOOTH_TITLE,
  BOOTH_SUMMARY,
  BOOTH_LOCATION_INFO,
  BOOTH_NOTICE_ARTICLE,
  BOOTH_MENU_INFO,
} from "@constants/booth";
import WaitingCheckModal from "@pages/waitingCheck/_components/WaitingCheckModal";

const BoothDetailPage = () => {

  const boothID = useBoothID() ?? "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  // const boothID = useBoothID() ?? "";

  return (
    <>
      <BoothDetailCard />
      <BoothDetailContent
        boothTitle={BOOTH_TITLE}
        boothSummary={BOOTH_SUMMARY}
        boothLocationInfo={BOOTH_LOCATION_INFO}
      />
      <Separator />
      <BoothDetailNotice article={BOOTH_NOTICE_ARTICLE}></BoothDetailNotice>
      <BoothDetailMenu menuInfo={BOOTH_MENU_INFO}></BoothDetailMenu>

      <BottomButton informationTitle="전체 줄" informationSub={`123 팀`}>
        <Button onClick={openModal}>
          <span>대기걸기</span>
        </Button>
      </BottomButton>
      {isModalOpen && <WaitingCheckModal onClose={closeModal} />}
    </>
  );
};

export default BoothDetailPage;

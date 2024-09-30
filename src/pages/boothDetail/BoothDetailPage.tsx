import { useEffect } from "react";

import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import { Entrance } from "@components/entrance/Entrance";
import useBottomsheet from "@hooks/useBottomsheet";
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

const BoothDetailPage = () => {
  // const boothID = useBoothID() ?? "";
  const { openBottomsheet } = useBottomsheet();
  useEffect(() => {
    openBottomsheet({ children: <Entrance /> });
  }, []);
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
      <BottomButton informationTitle="전체 줄" informationSub="123 팀">
        <Button>
          <span>대기 줄 서기</span>
        </Button>
      </BottomButton>
    </>
  );
};

export default BoothDetailPage;

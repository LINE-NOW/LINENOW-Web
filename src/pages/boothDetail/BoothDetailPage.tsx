import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import useBoothID from "./_hooks/useBoothID";
import { BoothDetailCard, BoothDetailContent } from "./_components";
import {
  BOOTH_TITLE,
  BOOTH_SUMMARY,
  BOOTH_LOCATION_INFO,
} from "@constants/booth";

const BoothDetailPage = () => {
  const boothID = useBoothID() ?? "";
  return (
    <>
      <BottomButton informationTitle="전체 줄" informationSub="123 팀">
        <Button>대기걸기</Button>
      </BottomButton>
      <BoothDetailCard boothID={boothID} activeIndex={0} />
      <BoothDetailContent
        boothTitle={BOOTH_TITLE}
        boothSummary={BOOTH_SUMMARY}
        boothLocationInfo={BOOTH_LOCATION_INFO}
      />
      <Separator />
    </>
  );
};

export default BoothDetailPage;

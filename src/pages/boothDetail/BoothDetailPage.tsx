import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";

import useBoothID from "./_hooks/useBoothID";
import { BoothDetailCard } from "./_components/card/BoothDetailCard";

const BoothDetailPage = () => {
  const boothID = useBoothID() ?? "";
  return (
    <>
      <BottomButton informationTitle="전체 줄" informationSub="123 팀">
        <Button>대기걸기</Button>
      </BottomButton>
      <BoothDetailCard boothID={boothID} activeIndex={0} />
    </>
  );
};

export default BoothDetailPage;

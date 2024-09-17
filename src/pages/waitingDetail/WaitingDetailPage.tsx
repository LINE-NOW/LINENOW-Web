import { useRef, useEffect, useState } from "react";
import * as S from "./WaitingDetailPage.styled";
import BoothCard from "@components/boothCard/BoothCard";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";

const WaitingDetailPage = () => {
  const [bottomButtonHeight, setBottomButtonHeight] = useState(0);
  const bottomButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomButtonRef.current) {
      setBottomButtonHeight(bottomButtonRef.current.offsetHeight);
    }
  }, [bottomButtonRef.current]);

  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCard borderBottom="none" padding="1rem" />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <S.WaitingDetailPageContent $paddingBottom={bottomButtonHeight}>
        <WaitingDetailCaution />
      </S.WaitingDetailPageContent>

      <BottomButton
        ref={bottomButtonRef}
        informationTitle="전체 줄"
        informationSub="123팀"
        waitingCancle="대기 취소하기"
      >
        <Button scheme="blueLight">
          <span>내 앞으로 지금</span>
          <span>123팀</span>
        </Button>
      </BottomButton>
    </>
  );
};

export default WaitingDetailPage;

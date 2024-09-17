import * as S from "./WaitingDetailPage.styled";
import BoothCard from "@components/boothCard/BoothCard";
import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";
import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "./_components/WaitingDetailCaution";

const WaitingDetailPage = () => {
  return (
    <>
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingDetailPageBoothCard>
          <BoothCard type="detail" />
        </S.WaitingDetailPageBoothCard>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton
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

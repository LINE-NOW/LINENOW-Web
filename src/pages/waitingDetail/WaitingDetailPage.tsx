import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";

const WaitingDetailPage = () => {
  return (
    <>
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

import BottomButton from "@components/bottomButton/BottomButton";
import Button from "@components/button/Button";

const BoothDetailPage = () => {
  return (
    <>
      <BottomButton informationTitle="전체 줄" informationSub="123 팀">
        <Button>대기걸기</Button>
      </BottomButton>
      <div>부스 디테일 페이지</div>
    </>
  );
};

export default BoothDetailPage;

import { useState } from "react";
import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";
import WaitingCheckPeople from "./WaitingCheckPeople";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import { useNavigate } from "react-router-dom";

interface WaitingCheckModalProps {
  onClose: () => void;
}

const WaitingCheckModal = ({ onClose }: WaitingCheckModalProps) => {
  // const WaitingCheckModal = ({}: WaitingCheckModalProps) => {
  const navigate = useNavigate();
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1); // 체크된 인원수 상태 관리

  const handleCancel = () => {
    console.log("취소 버튼 클릭");
    onClose();
  };

  const handleConfirm = () => {
    console.log("체크된 인원수:", checkedPeople);
    navigate("/check");
  };

  return (
    <InfoBottomButton
      informationTitle="입장 인원을 선택해주세요"
      informationSub="다인원의 경우 부스 내부 사정에 따라 
        대기 순번이 뒤로 밀릴 수 있습니다."
    >
      <WaitingCheckPeople onCheck={setCheckedPeople} />
      <ButtonLayout $col={2}>
        <Button scheme="grayLight" shape="outline" onClick={handleCancel}>
          <span>취소하기</span>
        </Button>
        <Button scheme="blue" onClick={handleConfirm}>
          <span>확인</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckModal;

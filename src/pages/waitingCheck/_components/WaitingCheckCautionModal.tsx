import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./WaitingCheckPeople.styled";
import iconBefore from "/icons/icon_checkBox_before.svg";
import iconAfter from "/icons/icon_checkBox_after.svg";

interface WaitingCheckModalProps {
  onClose: () => void;
}

const WaitingCheckCautionModal = ({ onClose }: WaitingCheckModalProps) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleCancel = () => {
    console.log("취소 버튼 클릭");
    onClose();
  };

  const handleConfirm = () => {
    console.log("확인 버튼 클릭");
    navigate("/waiting/1");
  };

  return (
    <InfoBottomButton
      informationTitle="유의사항을 꼭 숙지해주세요"
      informationSub="입장 순서가 되면 입장 확정 알림이 가요.
    3분 내로 미확정 시 줄 서기가 자동 취소될 수 있어요."
    >
      <S.CheckBoxWrapper onClick={() => setChecked(!checked)}>
        <S.CheckBoxImage
          src={checked ? iconAfter : iconBefore}
          alt="체크 박스"
        />
        <span>숙지했어요</span>
      </S.CheckBoxWrapper>
      <ButtonLayout $col={2}>
        <Button scheme="grayLight" shape="outline" onClick={handleCancel}>
          <span>취소하기</span>
        </Button>
        <Button scheme="blue" onClick={handleConfirm} disabled={!checked}>
          <span>대기 줄 서기</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckCautionModal;

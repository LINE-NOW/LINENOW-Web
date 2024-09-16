import { ReactNode } from "react";

import * as S from "./BottomButton.styled";
import ButtonLayout from "@components/button/ButtonLayout";

interface BottomButtonProps {
  children?: ReactNode;
  informationTitle?: string;
  informationSub?: string;
}
const BottomButton = ({
  children,
  informationTitle,
  informationSub,
}: BottomButtonProps) => {
  return (
    <S.BottomButtonWrapper>
      <S.BottomButtonInformationWrapper>
        <span>{informationTitle}</span>
        <span className="blue">{informationSub}</span>
      </S.BottomButtonInformationWrapper>

      <ButtonLayout $col={1}>{children}</ButtonLayout>
    </S.BottomButtonWrapper>
  );
};

export default BottomButton;

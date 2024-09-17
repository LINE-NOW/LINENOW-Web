import React, { forwardRef } from "react";
import * as S from "./BottomButton.styled";
import ButtonLayout from "@components/button/ButtonLayout";

interface BottomButtonProps {
  children?: React.ReactNode;
  informationTitle?: string;
  informationSub?: string;
  waitingCancle?: string;
}

const BottomButton = forwardRef<HTMLDivElement, BottomButtonProps>(
  ({ children, informationTitle, informationSub, waitingCancle }, ref) => {
    return (
      <S.BottomButtonWrapper ref={ref}>
        {(informationTitle || informationSub) && (
          <S.BottomButtonInformationWrapper>
            <span>{informationTitle}</span>
            <span className="blue">{informationSub}</span>
          </S.BottomButtonInformationWrapper>
        )}
        <ButtonLayout $col={1}>{children}</ButtonLayout>
        {waitingCancle && (
          <S.BottomButtonWaitingCancle>
            <span>{waitingCancle}</span>
          </S.BottomButtonWaitingCancle>
        )}
      </S.BottomButtonWrapper>
    );
  }
);

export default BottomButton;

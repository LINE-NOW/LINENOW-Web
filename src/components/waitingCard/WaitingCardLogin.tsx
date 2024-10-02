import * as S from "./WaitingCard.styled";

// interfaces
import { Waiting } from "@interfaces/waiting";

// hooks

import Button from "@components/button/Button";
import useBottomsheet from "@hooks/useBottomsheet";
import LoginBottomsheetContent from "@components/login/LoginBottomsheetContent";

interface WaitingCardProps {
  waiting: Pick<
    Waiting,
    | "waitingID"
    | "waitingTeamsAhead"
    | "booth"
    | "party_size"
    | "waitingStatus"
    | "confirmRemainingTime"
    | "arrivalRemainingTime"
  >;
  isButton?: boolean;
}

const WaitingCardLogin = () => {
  const { openBottomsheet } = useBottomsheet();

  const handleOpenBottomSheetButton = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };

  return (
    <S.WaitingCardWrapper>
      {/* 상단 타이틀 */}
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>
          <span className="blue">라인나우</span>로 간편하게 대기하세요
        </S.WaitingCardTitleLabel>
      </S.WaitingCardTitleWrapper>

      <S.WaitingCardContentWrapper>
        {/* 부스 정보 */}
        <S.BoothInformationWrapper>
          <S.BoothInformationImage src="images/image_icon.png" />
          <S.BoothInformaitonLabelWrapper>
            <S.BoothInformationNameLabel>line now</S.BoothInformationNameLabel>

            <S.BoothInformationPositionLabel>
              라인나우와 함께 대기 줄 서기를 등록하세요!
            </S.BoothInformationPositionLabel>
          </S.BoothInformaitonLabelWrapper>
        </S.BoothInformationWrapper>

        <Button scheme="lime" onClick={handleOpenBottomSheetButton}>
          로그인하고 이용하기
        </Button>
      </S.WaitingCardContentWrapper>
    </S.WaitingCardWrapper>
  );
};

export default WaitingCardLogin;

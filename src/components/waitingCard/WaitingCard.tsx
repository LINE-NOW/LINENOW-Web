import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import Button from "@components/button/Button";
import { ChipButton } from "@components/button/CustomButton";

export type WaitingCardType = "main" | "check";

interface BoothInfo {
  peopleCount: number;
  boothName: string;
  location: string;
}

interface WaitingCardProps {
  type: WaitingCardType;
  remainingTeams?: number;
  waitingMessage?: string;
  disabled?: boolean;
  to?: string;
  animation?: boolean;
  boothInfo: BoothInfo;
}

const WaitingCard = ({
  type,
  remainingTeams = 0,
  waitingMessage,
  disabled = true,
  to,
  boothInfo,
}: WaitingCardProps) => {
  const onCancelClick = () => {
    alert("대기 취소 요청이 완료되었습니다.");
  };

  return (
    <S.WaitingCardWrapper to={to || "#"}>
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>
          내 앞으로{" "}
          <S.HighlightedText type={type}>{remainingTeams}팀</S.HighlightedText>{" "}
          남았어요
        </S.WaitingCardTitleLabel>
        {type === "main" && (
          <ChipButton
            onClick={onCancelClick}
            scheme="grayLight"
            shape="outline"
          >
            취소하기
          </ChipButton>
        )}
      </S.WaitingCardTitleWrapper>
      <S.BoothInformationWrapper>
        <S.BoothInformationImage />
        <S.BoothInformaitonLabelWrapper>
          <S.BoothInformationNameLabel>
            <span>{boothInfo.peopleCount}명</span>
            <span>·</span>
            <span>{boothInfo.boothName}</span>
          </S.BoothInformationNameLabel>

          <IconLabel icon="location_gray_light" iconSize="1rem" gap="0.12rem">
            <S.BoothInformationPositionLabel>
              {boothInfo.location}
            </S.BoothInformationPositionLabel>
          </IconLabel>
        </S.BoothInformaitonLabelWrapper>
      </S.BoothInformationWrapper>

      {type === "main" && waitingMessage && (
        <S.WaitingCardButtonWrapper>
          <Button disabled={disabled}>{waitingMessage}</Button>
        </S.WaitingCardButtonWrapper>
      )}
    </S.WaitingCardWrapper>
  );
};

export default WaitingCard;

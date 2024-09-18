import * as S from "./WaitingCard.styled";
import IconLabel from "@components/label/IconLabel";
import Button from "@components/button/Button";
import { ChipButton } from "@components/button/CustomButton";

export type WaitingCardType = "main" | "check";

interface WaitingCardProps {
  type: WaitingCardType;
  remainingTeams?: number;
  cancelButtonLabel?: string;
  onCancelClick?: () => void;
  waitingMessage?: string;
  disabled?: boolean;
  boothInfo: {
    peopleCount: number;
    boothName: string;
    location: string;
  };
  to?: string;
  animation?: boolean;
}

const WaitingCard = ({
  type,
  remainingTeams = 0,
  cancelButtonLabel,
  onCancelClick,
  waitingMessage,
  disabled = true,
  boothInfo,
  to,
  animation = true,
}: WaitingCardProps) => {
  return (
    <S.WaitingCardWrapper
      to={to || "#"}
      $animation={type !== "check" && animation}
    >
      <S.WaitingCardTitleWrapper>
        <S.WaitingCardTitleLabel>
          내 앞으로{" "}
          <S.HighlightedText type={type}>{remainingTeams}팀</S.HighlightedText>{" "}
          남았어요
        </S.WaitingCardTitleLabel>
        {type === "main" && cancelButtonLabel && (
          <ChipButton
            onClick={onCancelClick}
            scheme="grayLight"
            shape="outline"
          >
            {cancelButtonLabel}
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

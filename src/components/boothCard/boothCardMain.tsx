import * as S from "./BoothCard.styled";
import {
  BOOTH_TITLE,
  BOOTH_SUMMARY,
  BOOTH_LOCATION_INFO,
} from "@constants/booth";

import Chip from "@components/chip/Chip";
import theme from "@styles/theme";
import BoothCardLayout from "./boothCardLayout";

interface BoothCardProps {
  to?: string;
  is_waiting: boolean;
  waitingCount: number;
}

const BoothCardMain = ({ to, is_waiting, waitingCount }: BoothCardProps) => {
  return (
    <BoothCardLayout
      boothTitle={BOOTH_TITLE}
      boothSummary={BOOTH_SUMMARY}
      boothLocationInfo={BOOTH_LOCATION_INFO}
      borderBottom={`1px solid ${theme.colors.border.gray075}`}
      padding="0.75rem 0.25rem 1rem 0.25rem"
      to={to}
    >
      <S.BoothCardChipListWrapper>
        {is_waiting && <Chip scheme="lime">대기중</Chip>}
        <Chip scheme="blueLight">대기 {waitingCount} 팀</Chip>
      </S.BoothCardChipListWrapper>
    </BoothCardLayout>
  );
};

export default BoothCardMain;

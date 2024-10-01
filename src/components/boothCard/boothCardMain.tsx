import * as S from "./BoothCard.styled";
import Chip from "@components/chip/Chip";
import theme from "@styles/theme";
import BoothCardLayout from "./boothCardLayout";
import { BoothList } from "@apis/domains/boothList/_interfaces";

interface BoothCardProps {
  booth: BoothList;
}

const BoothCardMain = ({ booth }: BoothCardProps) => {
  return (
    <BoothCardLayout
      boothImage={booth.thumbnail}
      boothTitle={booth.name}
      boothSummary={booth.description}
      boothLocationInfo={booth.location}
      borderBottom={`1px solid ${theme.colors.border.gray075}`}
      padding="0.75rem 0.25rem 1rem 0.25rem"
      to={`/booth/${booth.id}`}
    >
      <S.BoothCardChipListWrapper>
        {booth.is_waiting && <Chip scheme="lime">대기중</Chip>}{" "}
        <Chip scheme="blueLight">대기 {booth.waiting_count} 팀</Chip>{" "}
      </S.BoothCardChipListWrapper>
    </BoothCardLayout>
  );
};

export default BoothCardMain;

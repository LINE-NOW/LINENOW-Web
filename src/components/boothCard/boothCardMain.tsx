import * as S from "./BoothCard.styled";
import Chip from "@components/chip/Chip";
import BoothCardLayout from "./boothCardLayout";
import { BoothList } from "@apis/domains/boothList/_interfaces";

interface BoothCardProps {
  booth: BoothList;
}

const BoothCardMain = ({ booth }: BoothCardProps) => {
  return (
    <BoothCardLayout
      type="main"
      boothImage={booth.thumbnail}
      boothTitle={booth.name}
      boothSummary={booth.description}
      boothLocationInfo={booth.location}
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

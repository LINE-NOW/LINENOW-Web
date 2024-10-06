import * as S from "./BoothCard.styled";
import Chip from "@components/chip/Chip";
import BoothCardLayout from "./boothCardLayout";
import { BoothList } from "@apis/domains/boothList/_interfaces";

interface BoothCardProps {
  booth: BoothList;
}

const BoothCardMain = ({ booth }: BoothCardProps) => {
  const getWaitingChip = () => {
    if (booth.is_waiting) {
      return <Chip scheme="lime">대기 중</Chip>;
    }
  };
  const getChip = () => {
    switch (booth.is_operated) {
      case "not_started":
        return <Chip scheme="grayLight">운영 전</Chip>;
      case "finished":
        return <Chip scheme="grayLight">운영 종료</Chip>;
      default:
        //TODO: - API 수정시 total teams 로 바꿔야함
        return <Chip scheme="blueLight">대기 {booth.waiting_count} 팀</Chip>;
    }
  };
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
        {getWaitingChip()}
        {getChip()}
      </S.BoothCardChipListWrapper>
    </BoothCardLayout>
  );
};

export default BoothCardMain;

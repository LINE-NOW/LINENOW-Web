import {
  BOOTH_TITLE,
  BOOTH_SUMMARY,
  BOOTH_LOCATION_INFO,
} from "@constants/booth";
import BoothCardLayout from "./boothCardLayout";

interface BoothCardDetailProps {
  waitingCount: number;
}

const BoothCardDetail = ({ waitingCount }: BoothCardDetailProps) => {
  return (
    <BoothCardLayout
      boothTitle={
        <>
          <span>{waitingCount}</span>
          <span> · </span>
          <span>{BOOTH_TITLE}</span>
        </>
      }
      boothSummary={BOOTH_SUMMARY}
      boothLocationInfo={BOOTH_LOCATION_INFO}
      padding="1rem"
      onClickButtonAnimation={false}
    />
  );
};

export default BoothCardDetail;

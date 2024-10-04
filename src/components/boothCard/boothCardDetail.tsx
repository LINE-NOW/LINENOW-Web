import BoothCardLayout from "./boothCardLayout";
import { WaitingDetail } from "@interfaces/waitingDetail"; // WaitingDetail 인터페이스 import

interface BoothCardDetailProps {
  waitingDetail: WaitingDetail; // WaitingDetail 타입으로 props 정의
}

const BoothCardDetail = ({ waitingDetail }: BoothCardDetailProps) => {
  return (
    <>
      {waitingDetail ? (
        <BoothCardLayout
          boothTitle={
            <>
              <span>{waitingDetail.party_size}명</span>
              <span> · </span>
              <span>{waitingDetail.booth?.name}</span>
            </>
          }
          boothSummary={waitingDetail.booth.description}
          boothLocationInfo={waitingDetail.booth.location}
          padding="1rem"
          onClickButtonAnimation={false}
        />
      ) : (
        <div>대기 정보가 없습니다.</div>
      )}
    </>
  );
};

export default BoothCardDetail;
